const fs = require("fs/promises");
const fileName = "myfile.txt";
const updateFile = async (fileName, fileContent) => {
  // write code here
  // dont change function name
  fs.updateFile(fileName,fileContent,(error)=>{
  if(error){
  console.log(error);
  }else{
     console.log(`${fileName} ${fileContent}`);
  }
    
  })
  
};

module.exports = updateFile;
