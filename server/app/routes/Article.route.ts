import { ArticleController } from "../controllers";
import { Router } from "./Router";

export class ArticleRouter extends Router {
    constructor() {
        super(ArticleController);
        this.router
            .get("/", this.handler(ArticleController.prototype.all))
            .post("/populate", this.handler(ArticleController.prototype.populate));
    }
}
