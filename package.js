Package.describe({
    summary: "Time for some GraphicsMagick."
});

Npm.depends({
    "gm": "1.9.1",
    "path": "0.4.9"
});

Package.on_use(function (api) {
  api.add_files("gm.js", ["server"]);
});
