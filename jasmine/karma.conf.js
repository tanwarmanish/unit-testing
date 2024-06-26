module.exports = function (config) {
  config.set({
    frameworks: ["jasmine"],
    files: ["./src/*.js", "./src/*.spec.js"],
    plugins: ["karma-jasmine","karma-chrome-launcher","karma-coverage"],
    reporters:["dots","coverage"],
    preprocessors: {
      "./src/*.js": ["coverage"],
    },
    coverageReporter: {
      type: "html",
      dir: "./coverage",
    },
    browsers: ["ChromeHeadless"],
    colors: true,
    singleRun: true,
  });
};
