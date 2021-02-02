const path = require("path");

module.exports = function (content, _options) {
  const options = {
    name: "[hash].[ext]",
    outputPath: this.config.outputDir,
    publicPath: "assets",
    ..._options,
  };
  const filepath = path.posix.join(
    options.outputPath,
    options.publicPath,
    options.name
  );
  const route = path.posix.relative(
    options.outputPath,
    this.emitFile(content, filepath)
  );
  return path.posix.join("/", route);
};

module.exports.raw = true;
