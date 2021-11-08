console.log('');
const fs = require('fs');
const path = require('path');
const fsPromises = require('fs/promises');

const pathFiles = path.join(__dirname, 'files');
const pathFiles3 = path.join(__dirname, 'files-copy');

fsPromises.mkdir(pathFiles3).then(function() {
    console.log('Directory created successfully');
    copyAll();
}).catch(function() {
    console.log('Data update');
    fs.readdir(pathFiles3, function(err, items) {
        for (let i=0; i<items.length; i++) {
            let file3 = pathFiles3 + '/' + items[i];
            fs.unlink(file3, ()=> {
            });    
    }
    copyAll();
    
    });

});

   

  const copyAll = function(){
    fs.readdir(pathFiles, function(err, items) {
        for (let i=0; i<items.length; i++) {
            let file = pathFiles + '/' + items[i];
            let file2 = pathFiles3 + '/' + items[i];
            fs.readFile(file,(err, data) => {
                if (err) {                  
                    throw err
                }
               
               
                fs.writeFile(file2, data, (err)=>{
                    if (err) {                    
                        throw err
                    }
                } );
              
            });
        }
    });
    console.log('Copy complete')

  }



