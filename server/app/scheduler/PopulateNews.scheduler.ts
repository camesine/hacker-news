import { CronJob } from "cron";
import { Connection } from "../../config/Database";
import { ArticleService } from "../services";

async function populateArticles() {
    await Connection();
    await ArticleService.populate();
}

export const cronSync = new CronJob("* */1 * * *", populateArticles);
