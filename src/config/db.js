const mongoose = require("mongoose")

const connect = ()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/web11")//   ma,e is our dta base
}

module.exports = connect