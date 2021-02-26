// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint-config-prettier",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "prettier",
        "eslint-plugin-prettier",
    ],
    "ignorePatterns": ["src/types/graphql/index.d.ts", "gulpfile.js", "data"],
    "rules": {
        "prettier/prettier": 1,
        "@typescript-eslint/no-unused-vars": 1,
        "prefer-const": 1,
        "@typescript-eslint/ban-ts-comment" : 0
    }
};
