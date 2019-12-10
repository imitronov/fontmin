var Fontmin = require('fontmin');
// var rename = require('gulp-rename');

var fontmin = new Fontmin()
    .src('./src/*.ttf')
    .use(Fontmin.glyph({
        text: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхчцшщъыьэюя0123456789/*-+_=:;\\{}[]()~`"\'«»!@#$%^&?|.,<>©§Є«°±·№–—™„…‰•”“’‘�!"#$%&()*+,-./0123456789:;<=>?@[]^_`{|}~€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾',
        hinting: false
    }))
    .use(Fontmin.ttf2woff({
        deflate: true
    }))
    .use(Fontmin.ttf2woff2())
    .dest('./dist/');

fontmin.run(function (err, files) {
    if (err) {
        throw err;
    }
});