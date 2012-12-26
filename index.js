/****************************************************
* author：  hualei
* time：    2012/12/25 13:20:20
* fileName：index.js
*****************************************************/
var fs = require('fs'),
    path = require('path');

var ptpl = {
    init: function (arg) {
        var arg = arg || '-ptpl-text!';
        this.flag = arg;
        this.readFiles();
    },
    readFiles: function () {
        var that = this;
        var dir = '.'; // 在当前目录下操作
        var search = function (dir) {
            try {
                var files = fs.readdirSync(dir);
                files.forEach(function (file, index) {
                    var dpath = path.normalize(dir + '/' + file);
                    var stats = fs.statSync(dpath);
                    if (stats.isFile()) {
                        if (path.extname(dpath) === '.js') {
                            that.parse(dir, dpath);
                        }
                    } else if (stats.isDirectory()) {
                        search(dpath);
                    }
                });
            } catch (err) { }
        };
        search(dir);
    },
    parse: function (dir, file) {
        var data = fs.readFileSync(file, 'utf8');
        var reg = new RegExp(this.flag + '(.*?(.html|.htm|.tpl))');
        while ((arr = reg.exec(data)) && arr.length == 3) {
            var tpl = fs.readFileSync(path.resolve(dir, arr[1]), 'utf8');
            tpl = tpl.replace(/\r|\n/igm, '');
            data = data.replace(arr[0], tpl);
            fs.writeFileSync(file, data);
            console.log('parse file success');
        }
    }
}
exports.ptpl = ptpl;
