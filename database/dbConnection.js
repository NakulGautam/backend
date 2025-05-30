// import mongoose from "mongoose";



// export const dbConnection = () => {
//     mongoose
//     .connect(process.env.MONGO_URI, {
//         dbName: "RESTAURANT",
//     })
//     .then(() => {
//         console.log("Connected to database successfully!");
//     }).catch(err=>{
//         console.log(`Some error occured while connecting to database ${err}`)
//     })
// }


import mongoose from "mongoose";
import dotenv from "dotenv";

// ✅ Load environment variables
dotenv.config({ path: "./config/config.env" });

export const dbConnection = async() => {
    if (!process.env.MONGO_URI) {
        console.error("❌ MONGO_URI is not defined in .env file");
        process.exit(1);
    }

    await mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Connected to MongoDB successfully!"))
    .catch(err => {
        console.error(`❌ MongoDB Connection Error: ${err.message}`);
        process.exit(1);
    });

};
