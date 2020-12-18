module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      [
        "@babel/env",
        {
          useBuiltIns: "usage",
          corejs: 3,
          targets: {
            browsers: "Last 2 Chrome versions, Firefox ESR",
            node: "current",
          },
        },
      ],
      "@babel/preset-typescript",
    ],
    plugins: [
      "babel-plugin-transform-typescript-metadata",
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ["@babel/plugin-proposal-class-properties", { loose: true }],
    ],
    env: {
      build: {
        ignore: [
          "**/*.test.tsx",
          "**/*.test.ts",
          "**/*.story.tsx",
          "__snapshots__",
          "__tests__",
          "__stories__",
        ],
      },
    },
    ignore: ["node_modules"],
  };
};
