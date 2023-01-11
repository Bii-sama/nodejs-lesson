//This is the file System

const fs = require('fs') //Getting the file system

fs.readFile("./docs/file.txt", (err, data)=>{ //reading the file
if(err){
    console.log(err)
}
console.log(data.toString())
})


fs.writeFile("./docs/file.txt","Attack On Titans is the Bomb",()=>{ //writing a file
console.log("Added Baby")
})

fs.writeFile("./docs/filetwo.txt","Attack On Titans is the Bomb",()=>{ //added new file
    console.log("Added Baby")
    })


    if(fs.existsSync('./Folder-Practice')){
        fs.rmdir('./Folder-Practice', ()=>{
            console.log('I don comot am')
        })
}else{
    fs.mkdir('./Folder-Practice',(err)=>{
        if(err){
          console.log('Error dey')
        }
        console.log('I don create file')
})
}
