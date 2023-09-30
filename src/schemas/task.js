const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  note:{
    type: String,
  },
  isFavorite: {
    type: Boolean,
  },
  colorTask: {
    type: String,
  },  
},
{
    timestamps:true,
  }
)

const Task = mongoose.model('Task', taskSchema);

module.exports = Task; 
