import { Request, Response } from "express";
import { ArticleService } from "../services";
import { Controller } from "./Controller";

export class ArticleController extends Controller {

    private articleService: ArticleService;

    constructor(req: Request, res: Response) {
        super(req, res);
        this.articleService = new ArticleService();
    }

    public async populate(): Promise<Response> {
        try {
            await ArticleService.populate();
            return this.res.status(200).send();
        } catch (ex) {
            return this.res.status(500).send();
        }
    }

    public async all(): Promise<Response> {
        try {
            const articles = await this.articleService.findArticles();
            return this.res.status(200).send({ articles });
        } catch (ex) {
            return this.res.status(500).send();
        }
    }

    public async deleteArticle(): Promise<Response> {
        const { articleId } = this.req.body as unknown as { articleId: string };
        try {
            await this.articleService.softDelete(articleId);
            return this.res.status(200).send();
        } catch (ex) {
            return this.res.status(500).send();
        }
    }

}
