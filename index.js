#!/usr/bin/env node

var request = require('request');
var format = require('./format');

var lineArr = process.argv;
// let lineArr = ["456","123","数学","英语","钢笔"]
var wordArr = lineArr.slice(2, lineArr.length);
// console.log(wordArr)
var word = encodeURI(wordArr.join('+'));
// console.log(word)


request('http://fanyi.youdao.com/openapi.do?keyfrom=translation-tool&key=1730699468&type=data&doctype=json&version=1.1&q=' + word, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log(error)
      // console.log("_________________")
      // console.log(body)
      //body  {"translation":["Mathematics English pen"],"query":"数学 英语 钢笔","errorCode":0}
        format(body);
    } else {
        console.log('暂无释义！\n')
    }
})