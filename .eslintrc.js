module.exports = {
  env: {
    node: true,
    browser: true,
    jest: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  rules: {
    "react/prop-types": "off",
    "no-console": ["warn"],
    "import/no-extraneous-dependencies": ["error"],
    "import/no-unresolved": "off",
    "import/named": "off",
    "no-case-declarations": ["warn"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["camelCase"],
      },
      {
        selector: "variable",
        modifiers: ["destructured"],
        format: null,
      },
      {
        selector: "variable",
        leadingUnderscore: "allow",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
      },
      {
        selector: ["enum", "enumMember", "classProperty"],
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
      },
      {
        selector: "parameter",
        leadingUnderscore: "allow",
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: "typeLike",
        format: ["PascalCase", "UPPER_CASE"],
      },
      {
        selector: "objectLiteralProperty",
        leadingUnderscore: "allowDouble",
        format: ["camelCase", "PascalCase", "UPPER_CASE", "snake_case"],
      },
      {
        selector: "typeProperty",
        leadingUnderscore: "allowDouble",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
      },
      {
        selector: "function",
        modifiers: ["global"],
        format: ["camelCase", "PascalCase"],
      },
    ],
  },
  overrides: [
    {
      files: ["*.{test,spec,story}.ts{,x}"],
      rules: {
        "import/no-extraneous-dependencies": ["warn", { packageDir: "./" }],
      },
    },
    {
      files: ["*.test.ts{,x}"],
      rules: {
        "@typescript-eslint/no-var-requires": ["off", { packageDir: "./" }],
      },
    },
  ],
};
