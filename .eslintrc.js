module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:prettier/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
    },
    plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
    rules: {
        "prettier/prettier": "error",
        "@typescript-eslint/explicit-module-boundary-types": "off",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
