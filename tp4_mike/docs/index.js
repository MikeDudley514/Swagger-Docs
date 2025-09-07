const basicInfo = require("./basicinfo");
const servers = require("./server");
const tags = require("./tags");
const components = require("./components");
const omnivox = require("./omnivox");

module.exports = {
  ...basicInfo,
  ...servers,
  ...tags,
  ...components,
  ...omnivox,
};
