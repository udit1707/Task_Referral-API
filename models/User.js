const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
      type: String
    },
    password: {
      type: String
    },
    name: {
      type: String
    },
    referral:{
          type:Schema.Types.ObjectId,
          ref:"User",
                    
    }
}
);
module.exports = mongoose.model('User', userSchema);
  
