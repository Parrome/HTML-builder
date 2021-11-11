const fs = require('fs');
const path = require('path');

const pathStyle = path.join(__dirname, 'styles');
const pathFile = path.join(__dirname, 'project-dist','bundle.css')

const fsPromises = require('fs/promises');

console.log('');

fsPromises.writeFile(pathFile, '').then(function() {
    console.log('File bundle.css created successfully');

    fs.readdir(pathStyle, function(err, items) {
        for (let i=items.length-1; i>=0; i--) {
            let file = pathStyle + '/' + items[i];
            let ext = file.substring(file.length - 3);
            if (ext == 'css') {
                fs.readFile(file,(err, data) => {
                    if (err) {                  
                        throw err
                    }
                   
                   
                    fs.appendFile(pathFile, data, (err)=>{
                        if (err) {                    
                            throw err
                        }
                    } );
                  
                });
            }
    
    }
})


});