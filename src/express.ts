const express = require("express");
const app = express()

enum ResponseStatus{
    Error = 500,
    NotFound = 404,
    Success = 200
}

app.get("/",function(req,res){
    if(!req.query.userId){
        res.status(ResponseStatus.Error).json({
            msg:"Not Found"
        })
    }

    //and so one....
    res.status(ResponseStatus.Success).json({})
})

app.listen(3000)