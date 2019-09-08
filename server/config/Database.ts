import * as mongoose from "mongoose";
import { config } from "../config";

export async function Connection() {
    try {
        await mongoose.connect(config.DATABASE.MONGODB.SERVER, {
            ...config.DATABASE.MONGODB.AUTH,
            useCreateIndex: true,
            useNewUrlParser: true,
        });
        require("mongoose").Promise = global.Promise;
    } catch (err) {
        await new Promise((resolve) => setTimeout(() => resolve(), 5000));
        await Connection();
    }
}
