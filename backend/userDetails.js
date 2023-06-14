const mongoose = require("mongoose");

const UesrDetailsSchema = new mongoose.Schema(
    {
        name: String,
        email: {type: String, unique:true},
        phone: String,
        password: String
    },
    {
        collection: "users",
    }
);

mongoose.model("users", UesrDetailsSchema);