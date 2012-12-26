
# 拷贝html模版文件内容到js文件 #

----------

- 简介
> 读取并转换html模版文件内容为字符串（去掉文件中的换行），替换JS文件里相应引用此文件的地址为转换后的字符串。方便mustache、underscore等模板库解析文件。 
> 

- 安装
> npm install ptpl -g  

- 使用
> 命令行定位到需要转换的目录内，  
> 输入ptpl，或者 ptpl [自定义标记符]

- 用例（example）  

    JS-file：

    // 变量名格式为：标记+文件路径。默认标记“-ptpl-text!”    
    // 模版文件路径为./xxViewTemp.html  
    var tpl = '-ptpl-text!./xxViewTemp.html';  
    var tpl1 = '-ptpl-text!a/yyViewTemp.html'; 
    
    // use in mustach or underscore  
    // var compiledTemplate = Mustache.compile(tpl);  
    // var templateOutput = compiledTemplate(templateData);        

    html-file ( xxViewTemp.html ) :  
    <span>name:{{name}</span>

- 注意
> 要转换html模版文件所在的各级目录名 以及html模版文件的文件名，不能包含.tpl、.htm、.html等“关键字”。   
> 最好用默认标记“-ptpl-text!”，标记支持自定义，但需要保证与js文件里其他字符不能重复。

