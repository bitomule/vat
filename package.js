Package.describe({
  name: "bitomule:var",
  summary: "",
  version: "0.1.0",
  git: ""
});

Package.onUse(function(api) {
  api.versionsFrom("1.0.1");

  api.addFiles("lib/var.js", ["client","server"]);
  api.export('vats', ["client","server"]);
});
