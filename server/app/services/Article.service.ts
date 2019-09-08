import axios from "axios";
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
                title: current.title || current.story_title,
                url: current.url || current.story_url,
            });
            return acc;
        }, []);
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
        return Articles.find({ delete: false }).sort({ date: -1 });
    }

}
