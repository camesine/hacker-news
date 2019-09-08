import * as mongoose from "mongoose";

export interface IArticle {
    author: string;
    date: string;
    _id: string | mongoose.Types.ObjectId;
    title: string;
    url: string;
    delete: boolean;
    articleId: number;
    story_id: number;
}

export interface IResponseArticles {
    author: string;
    created_at: string;
    title: string;
    story_title: string;
    story_url: string;
    objectID: number;
    url: string;
}
