const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
// Използваме за криптиране на паролата при регистрация
const bcrypt = require("bcryptjs");
// Използваме за декриптиране на паролата при вписване 
const jwt = require("jsonwebtoken");

// Секретен ключ - използва се при декриптиране на паролата
const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";



app.get("/", (req, resp) => {
 
    resp.send("App is Working");
    // You can check backend is working or not by
    // entering http://loacalhost:5000
     
    // If you see App is working means
    // backend working properly
});


mongoose.connect('mongodb://127.0.0.1:27017/', {
    dbName: 'pgoranov',
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log('connected'))
.catch(e=>console.log(e));
 


// Това е за потребителя
require("./userDetails");
const User = mongoose.model("users");    
User.createIndexes();

// Това е за продуктите
require("./productsDetails");
const Product = mongoose.model("products");   



// Това е функцията с която регистрира нов потребител
app.post("/register", async (req, res) => {
   const {name, email, phone, password } = req.body;
   
   // При регистрация, паролата въведена от потребителя се криптира
   const encryptedPassword = await bcrypt.hash(password, 10);
   try{
    const oldUser = await User.findOne({email});

    // Проверка за съществуващ потребител
    if(oldUser){
        return res.send({error: "User Exists"});
    }
    await User.create({
        name,
        email,
        phone,
        password: encryptedPassword
    });
    res.send({status: "ok"});
   } catch (error) {
    res.send({status: "error"});
   }
});

// Това е функцията с която вписва потребител в системата
app.post("/login-user", async (req, res) => {
    const {email, password} = req.body;

    //Проверка съществуващ потребител
    const user = await User.findOne({email});
    if(!user){
        return res.send({error: "User Not found"});
    }
    // Проверява дали потребителя е въвел правилна парола
    if(await bcrypt.compare(password,user.password)){
        // Декриптиране на паролата
        const token = jwt.sign({email: user.email}, JWT_SECRET);

        // Операцията е успешна и е създаден ресурс
        if(res.status(201)){
            return res.json({status: "ok", data: token});
        } else {
            return res.json({error: "error"});
        }
    }
    res.json({status: "error", error: "Invalid Password"});

});

// Това е функция с която се проверява за съществуващ потребител
app.post("/userData", async(req,res)=>{
    const {token} = req.body;
    try{
        const user = jwt.verify(token, JWT_SECRET);
        console.log(user);
        const useremail = user.email;
        User.findOne({email: useremail}).then((data)=>{
            res.send({status: "ok", data: data});
        })
        .catch((error) => {
            res.send({status: "error", data: error});
        });
    } catch (error) {}
});

// Това е функция с която се показват всички продукти
app.get("/getAllProducts", async(req, res) => {
    try {
        const allProducts = await Product.find({});
        res.send({status: "ok", data: allProducts});
    } catch (error) {
        console.log(error);
    }

});




app.listen(5000, ()=> {
    console.log("Server started");
});