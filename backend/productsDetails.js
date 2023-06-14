const mongoose = require("mongoose");

const ProductsDetailsSchema = new mongoose.Schema(
    {
        name: String,
        primary_category_id: String,
        price: String,
        currency: String,
    },
    {
        collection: "products",
    }
);

mongoose.model("products", ProductsDetailsSchema);