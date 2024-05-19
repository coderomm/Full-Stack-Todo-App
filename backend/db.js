const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:VWthl7v7Bt0dnJbj@cluster0.4kr8zfp.mongodb.net/FullStackTodoApp");
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const todo = mongoose.model("todo", todoSchema);
module.exports = {
    todo
}