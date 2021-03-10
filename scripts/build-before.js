module.exports = function (ctx) {
  console.info("**Build Before Script Start");
  const fs = require("fs");
  const _ = require("lodash");
  const path = require("path");
  const filePath = path.join(__dirname,"..","environments","environment.ts")
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    var replaceData = _.replace(
      data,
      "public static cordova_dependence = false",
      "public static cordova_dependence = true"
    );

    console.info(replaceData);
    fs.writeFile(filePath, replaceData, (error) => {
      if (error) {
        console.error(error);
        return;
      }
      console.info("**Build Before Script Done");
    });
  });
};
