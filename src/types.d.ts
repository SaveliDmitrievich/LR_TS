declare module '*.css';

declare var process: {
    env: {
        API_URL: string;
        API_KEY: string;
        [key: string]: string | undefined;
    };
};

interface ImportMetaEnv {
    readonly API_URL: string;
    readonly API_KEY: string;
}

declare var importMeta: {
    env: ImportMetaEnv;
};
