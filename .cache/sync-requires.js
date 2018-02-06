// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/jonghunkwon/Documents/kwonjounghun.github.io/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/jonghunkwon/Documents/kwonjounghun.github.io/src/templates/blog-post.js")),
  "component---src-pages-elements-js": preferDefault(require("/Users/jonghunkwon/Documents/kwonjounghun.github.io/src/pages/elements.js")),
  "component---src-pages-generic-js": preferDefault(require("/Users/jonghunkwon/Documents/kwonjounghun.github.io/src/pages/generic.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/jonghunkwon/Documents/kwonjounghun.github.io/src/pages/index.js")),
  "component---src-pages-landing-js": preferDefault(require("/Users/jonghunkwon/Documents/kwonjounghun.github.io/src/pages/landing.js"))
}

exports.json = {
  "layout-index.json": require("/Users/jonghunkwon/Documents/kwonjounghun.github.io/.cache/json/layout-index.json"),
  "my-second-post.json": require("/Users/jonghunkwon/Documents/kwonjounghun.github.io/.cache/json/my-second-post.json"),
  "layout-index.json": require("/Users/jonghunkwon/Documents/kwonjounghun.github.io/.cache/json/layout-index.json"),
  "hello-world.json": require("/Users/jonghunkwon/Documents/kwonjounghun.github.io/.cache/json/hello-world.json"),
  "layout-index.json": require("/Users/jonghunkwon/Documents/kwonjounghun.github.io/.cache/json/layout-index.json"),
  "hi-folks.json": require("/Users/jonghunkwon/Documents/kwonjounghun.github.io/.cache/json/hi-folks.json"),
  "layout-index.json": require("/Users/jonghunkwon/Documents/kwonjounghun.github.io/.cache/json/layout-index.json"),
  "elements.json": require("/Users/jonghunkwon/Documents/kwonjounghun.github.io/.cache/json/elements.json"),
  "layout-index.json": require("/Users/jonghunkwon/Documents/kwonjounghun.github.io/.cache/json/layout-index.json"),
  "generic.json": require("/Users/jonghunkwon/Documents/kwonjounghun.github.io/.cache/json/generic.json"),
  "layout-index.json": require("/Users/jonghunkwon/Documents/kwonjounghun.github.io/.cache/json/layout-index.json"),
  "index.json": require("/Users/jonghunkwon/Documents/kwonjounghun.github.io/.cache/json/index.json"),
  "layout-index.json": require("/Users/jonghunkwon/Documents/kwonjounghun.github.io/.cache/json/layout-index.json"),
  "landing.json": require("/Users/jonghunkwon/Documents/kwonjounghun.github.io/.cache/json/landing.json")
}