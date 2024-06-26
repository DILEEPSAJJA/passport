const mongoose = require('mongoose')

exports.connectMongoose=()=>{
  mongoose.connect("mongodb://localhost:27017/passport").then(()=>{
    console.log("Database connected");
  }).catch((e)=>{
    console.log(e);
  });
}

const userSchema = new mongoose.Schema({
  name : String,
  username : {
    type : String,
    unique : true,
    required : true,
  },
  password : String
});

exports.User = mongoose.model("User",userSchema);
