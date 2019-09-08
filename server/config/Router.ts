import * as express from "express";
import { ArticleRouter } from "../app/routes";

interface IROUTER {
    path: string;
    middleware: any[];
    handler: express.Router;
}

const Article = new ArticleRouter();

export const ROUTER: IROUTER[] = [{
    handler: Article.router,
    middleware: [],
    path: "/article",
}];
