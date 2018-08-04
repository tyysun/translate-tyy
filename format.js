#!/usr/bin/env node


var colors = require('colors');

function format(str) {
    //{"translation":["Mathematics English pen"],
    // "query":"数学 英语 钢笔",
    // "errorCode":0}
    
    var obj = JSON.parse(str)
    var translation = obj.translation 
    var translation = translation.join(':')
    console.log('翻译'.red.bold + ':\n' + '    ' + translation.yellow );
   

    // 网络释义
    var web = obj.web ; // array
    if (web) {
        console.log('\n网络释义'.red.bold + ':');
        for (var i = 0; i < web.length; i++) {
            var value = web[i].value ? web[i].value : web[i]['value'];
            var webTranslate = value.join('，');
            var key = web[i].key;
            console.log('    ' + (i + 1) + '.' + ' ' + value + ':');
            console.log('    ' + '——'.green + ' ' + key + '\n')
        }
    }

}
module.exports = format;
