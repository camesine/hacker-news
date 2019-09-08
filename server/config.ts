import { env } from "process";

const LOCAL_CONFIGURATION = {
    MONGODB: {
        AUTH: {},
        SERVER: "mongodb://127.0.0.1:27017/hacker_news",
    },
};

const PRODUCTION_CONFIGURATION = {
    MONGODB: {
        AUTH: {},
        SERVER: env.SERVER,
    },
};

export function isProduction(): boolean {
    return env.NODE_ENV === "PRODUCTION";
}

export const config = {
    DATABASE: isProduction() ? PRODUCTION_CONFIGURATION : LOCAL_CONFIGURATION,
    PORT_APP: 8080,
    SECRET: env.SECRET,
    URL_ARTICLES: "https://hn.algolia.com/api/v1/search_by_date?query=nodejs",
};
