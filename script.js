var figlet = require("figlet");

figlet("SREERAG GR", function (err,data){
    if (err){
        console.log("something went wrong....")
        console.dir(err)
        return;
    }
    console.log(data)
})