const path = require("path");

module.exports = function (content, _options) {
  const options = {
    publicPath: this.config.outputDir,
    outputPath: "assets",
    name: "[hash].[ext]",
    ..._options,
  };
  const filepath = path.posix.join(
    options.publicPath,
    options.outputPath,
    options.name
  );
  const route = path.posix.relative(
    options.publicPath,
    this.emitFile(content, filepath)
  );
  return path.posix.join("/", route);
};

module.exports.raw = true;
