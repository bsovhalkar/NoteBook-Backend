const mongoose = require("mongoose");

const url = "mongodb+srv://bsovhalkar:x4Zu1AQ8KCRv5LbM@notebook.xstfrrt.mongodb.net/";

const connectMongo = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected successfully to MongoDB Atlas");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
    }
};

module.exports = connectMongo;
