module.exports = {
    "parser": "babel-eslint",
    "extends": ["airbnb","plugin:prettier/recommended", "prettier/react"],
    "env": {
	   "browser": true,
	   "node": true,
       "jquery": true
	  },
    "rules": {
        "import/extensions": ["off", "never"],
        "no-bitwise": ["error", { "allow": ["~"] }],
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
        "react/prop-types": [1, { ignore: ["dispatch", "match", "store"]}],
        "prettier/prettier": ["error", {"singleQuote": true, "parser": "flow"}],
    },

    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
};
