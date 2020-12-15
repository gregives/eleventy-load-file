const path = require("path");

module.exports = function (content, options = {}) {
  const { name, publicPath, outputPath } = {
    ...{
      publicPath: this.config.dir.output,
      outputPath: "assets",
      name: "[hash].[ext]",
    },
    ...options,
  };
  const filepath = path.posix.join(publicPath, outputPath, name);
  const route = path.posix.relative(
    publicPath,
    this.emitFile(content, filepath)
  );
  return path.posix.join("/", route);
};
