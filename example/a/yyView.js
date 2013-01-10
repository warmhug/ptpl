

// before replace: 
var tpl = '<!--ptpl-text!./yyViewTemp.html--><!doctype html><title>aa</title>';
var tpl1 = '<!--ptpl-text!../xxViewTemp.html--><span>name:{{name}</span>';


// use in mustach or underscore

// mustach :
// var compiledTemplate = Mustache.compile(tpl);
// var templateOutput = compiledTemplate(templateData);      

// underscore :
// var complied = _.template(tpl);
// var output = complied(data);