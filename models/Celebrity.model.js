const { Schema, model } = require("mongoose");

const celebritySchema = new Schema ( {
     name: {
    type: String,
    requiered: true,
    unique: true
},    
    occupation: String,
    catchPhrase: {
        type: String,
        requiered: true,
          },
})


const Celebrity = model("Celebrity", celebritySchema);

module.exports = Celebrity;
