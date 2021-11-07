const fs = require('fs');
const path = require('path')
const filePath = path.join(__dirname,'secret-folder')

 
fs.readdir(filePath, function(err, items) {
    for (var i=0; i<items.length; i++) {
        var file = filePath + '/' + items[i];
 
        // console.log("Start: " + file);
        fs.stat(file, generate_callback(file));
    }
});
 
function generate_callback(file) {
    return function(err, stats) {
            // console.log(file);
            if ( stats["size"] > 0) {
            console.log(`${path.parse(file).name} - ${path.parse(file).ext.slice(1)} - ${stats["size"]*0.001} kb`);
            }
        }
};