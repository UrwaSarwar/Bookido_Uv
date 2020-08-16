var mongoose = require("mongoose");

var CommentSchema = mongoose.Schema({
  username: String,
  comment: {
    type: String,
    trim: true,
    required: [true, 'why comment when its gonna be empty xD']}
});
const comment = mongoose.model("comments", CommentSchema);
module.exports = comment;
