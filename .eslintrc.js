// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
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
        "prettier"
    ],
    "ignorePatterns": ["src/types/generated/graphql.d.ts", "gulpfile.js"],
    "rules": {
        "prettier/prettier": 1,
        "@typescript-eslint/no-unused-vars": 1,
        "prefer-const": 1
    }
};
