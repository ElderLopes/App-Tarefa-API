const mongoose = require("mongoose");

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://localhost:27017/task',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  }
}

module.exports = new Database();
