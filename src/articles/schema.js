const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const articleSchema = new mongoose.Schema(
  {
    headLine: {
      type: String,
      required: true,
    },
    subHead: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    author: {
      name: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
    },
    cover: String,
  },
  { timestamps: true }
);

articleSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Article", articleSchema);
