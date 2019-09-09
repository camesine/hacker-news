import { object, string } from "joi";

export const deleteArticle = object().keys({
    articleId: string().required(),
});
