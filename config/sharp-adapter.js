'use strict';

var sharp = require('sharp');

module.exports = function (imagePath) {
  var image = sharp(imagePath);

  return {
    metadata: function metadata() {
      return image.metadata();
    },
    resize: function resize(_ref) {
      var width = _ref.width,
          mime = _ref.mime,
          options = _ref.options;
      return new Promise(function (resolve, reject) {
        var resized = image.clone().resize(width, null);

        if (options.background) {
          resized = resized.background(options.background).flatten();
        }

        if (mime === 'image/jpeg') {
          resized = resized.jpeg({
            quality: options.quality
          });
        }

        if (mime === 'image/png') {
          resized = resized.png({
            quality: options.quality,
            palette: true,
            compressionLevel: 9,
            adaptiveFiltering: true,
            progressive: true,
          });
        }

        resized.toBuffer(function (err, data, _ref2) {
          var height = _ref2.height;

          if (err) {
            reject(err);
          } else {
            resolve({
              data,
              width,
              height
            });
          }
        });
      });
    }
  };
};