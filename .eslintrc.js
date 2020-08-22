module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2019,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "valid-typeof": "warn",
        "sctrict": ['error', 'never'],
        "no-undef": "error"
    }
};
