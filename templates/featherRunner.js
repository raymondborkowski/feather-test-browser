// setup globals
if (!window.global){
    window.global = window;
}
if (!global.__dirname) {
    global.__dirname = '/';
}

var FeatherNetBrowser = require('feathernet/browser');
var FeatherTestRunner = require("{{pathToFeatherRunner}}");

// setup feather-test-runner
var featherTestOptions = {{{options}}};
global.FeatherTest = new FeatherTestRunner(featherTestOptions);
if (featherTestOptions.networkIntercept) {
    global.networkIntercept = new FeatherNetBrowser();
    global.networkIntercept.install();
}

// load your plugins
{{{plugins}}}

// load your helpers
{{{helpers}}}

FeatherTest.listen();
