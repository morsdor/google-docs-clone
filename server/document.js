const { Schema, model, mongoose } = require("mongoose");
const uri =
  "mongodb+srv://<name>:<password>@cluster0.ihyly2p.mongodb.net/google-docs?retryWrites=true&w=majority";

(async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
})();

const Document = new Schema({
  _id: String,
  data: Object,
});



module.exports.DocumentModel = model("Document", Document);
