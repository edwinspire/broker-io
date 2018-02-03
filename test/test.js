// The module to "bootstrap"
var loadModule = "test";
//process.env.EXPRESS_STATIC_DIR = __dirname+'/src/app-client';
process.env.EXPRESS_STATIC_DIR = __dirname+'/src/app-client2/dist';



// Now load the Dojo loader
require(loadModule);