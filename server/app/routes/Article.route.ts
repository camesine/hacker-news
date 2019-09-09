import { ArticleController } from "../controllers";
import { Validator } from "../middlewares";
import { deleteArticle } from "../schemas";
import { Router } from "./Router";

export class ArticleRouter extends Router {
    constructor() {
        super(ArticleController);
        this.router
            .get("/", this.handler(ArticleController.prototype.all))
            .post("/populate", this.handler(ArticleController.prototype.populate))
            .post("/delete", [ Validator(deleteArticle) ], this.handler(ArticleController.prototype.deleteArticle));
    }
}
