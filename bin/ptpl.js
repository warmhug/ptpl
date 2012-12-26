#!/usr/bin/env node

var ptpl = require('../index.js').ptpl,
    arg = process.argv[2];
//console.log(makefile);

ptpl.init(arg);