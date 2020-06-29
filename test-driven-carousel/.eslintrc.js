module.exports = {
    plugins: ["react"],
    extends: ["eslint:recommended", "plugin:react/recommended"],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        node: true,
    },
    rules: {
        "comma-dangle": ["error", "always-multiline"],
    },
    settings: {
        react: {
            version: "16.13.1",
        },
    },
}