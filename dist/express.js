"use strict";
const express = require("express");
const app = express();
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["Error"] = 500] = "Error";
    ResponseStatus[ResponseStatus["NotFound"] = 404] = "NotFound";
    ResponseStatus[ResponseStatus["Success"] = 200] = "Success";
})(ResponseStatus || (ResponseStatus = {}));
app.get("/", function (req, res) {
    if (!req.query.userId) {
        res.status(ResponseStatus.Error).json({
            msg: "Not Found"
        });
    }
    //and so one....
    res.status(ResponseStatus.Success).json({});
});
app.listen(3000);
