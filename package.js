Package.describe({
  name: "bitomule:var",
  summary: "Meteor package that exports Europe vat % object",
  version: "0.1.0",
  git: "https://github.com/bitomule/vat"
});

Package.onUse(function(api) {
  api.versionsFrom("1.0.1");

  api.addFiles("lib/vat.js", ["client","server"]);
  api.export('vats', ["client","server"]);
});
