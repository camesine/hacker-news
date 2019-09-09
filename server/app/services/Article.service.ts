import axios from "axios";
import * as moment from "moment";
import * as mongoose from "mongoose";
import { config } from "../../config";
import { IArticle, IResponseArticles } from "../interfaces";
import { Articles, ISchemaArticle, TempArticles } from "../models";

export class ArticleService {

    public static async populate() {
        const response = await axios.get(config.URL_ARTICLES);
        const articles: IResponseArticles[] = response.data.hits.length ? response.data.hits : [];
        const result: IArticle[] = articles.reduce((acc, current) => {
            acc.push({
                articleId: current.objectID,
                author: current.author,
                date: current.created_at,
                delete: false,
                title: current.story_title || current.title,
                url: current.url || current.story_url,
            });
            return acc;
        }, []);
        await TempArticles.remove({});
        await TempArticles.insertMany(result);
        const news = await this.verifyNotExist();
        await Articles.insertMany(news);
    }

    private static async verifyNotExist(): Promise<ISchemaArticle[]>  {
        return TempArticles.aggregate([{
            $lookup: {
                as: "articles_match",
                foreignField: "articleId",
                from: "articles",
                localField: "articleId",
            },
        }, {
                $match: {
                        articles_match: {
                        $eq: [],
                    },
                },
            },
        ]);
    }

    public findArticles() {
        return Articles.find({ delete: false }).sort({ date: -1 })
            .then((result) => {
                return result.map((article) => {
                    article.date = this.formatterDate(article.date);
                    return article;
                });
            });
    }

    public softDelete(id: string) {
        return Articles.updateOne({
            _id: mongoose.Types.ObjectId(id),
        }, {
            $set: {
                delete: true,
            },
        });
    }

    private formatterDate(date: string) {
        const yesterday = moment().add(-1, "days").startOf("day");
        const today = moment().startOf("day");
        if (moment(date).isSame(yesterday, "d")) {
            return "Yesterday";
        }
        if (moment(date).isSame(today, "d")) {
            return moment(date).format("HH:mm a");
        }
        return moment(date).format("MMM DD");
    }

}
