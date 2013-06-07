# GraphicsMagick for Meteor

Everyone likes messing around with images, so why not let Meteor have some fun with it. This Meteor Smart package is built on [Aaron Heckmanns gm for Node](https://github.com/aheckmann/gm). This package also includes an import to the Node Path directive, allowing you to easily access the local path of the Meteor app (helps a great deal with GM's absolute paths).

## Quick start

Get yourself set up with

```js
mrt add GraphicsMagick
```

Then within your server code (GM is only applicable server side) define a variable to store your applications working path, using the included *path* library

```js
var __dirname = path.resolve('.');
```

Then use GraphicsMagick as you would the NodeJS version.

```js
// resize and remove EXIF profile data
gm(__dirname+'/public/nonrefresh~/img.jpg')
    .resize(240, 240)
    .noProfile()
	.write('__dirname+'/public/nonrefresh~/img_thumb.jpg'', function (err) {
  		if (!err) console.log('done');
	});
```

[See examples](https://github.com/aheckmann/gm/blob/master/README.md)