import * as mongoose from "mongoose";
import { IArticle } from "../interfaces";

export interface ISchemaArticle extends IArticle, mongoose.Document {
    _id: mongoose.Types.ObjectId;
}

const schema = new mongoose.Schema({
    articleId: Number,
    author: String,
    date: String,
    delete: Boolean,
    title: String,
    url: String,
}, { timestamps: true });

export const Articles = mongoose.model<ISchemaArticle>("articles", schema);
export const TempArticles = mongoose.model<ISchemaArticle>("temp_articles", schema);
