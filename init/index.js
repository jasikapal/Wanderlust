const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");

// const ATLASDB_URL=process.env.ATLASDB_URL;
const ATLASDB_URL="mongodb+srv://jasika:jasika@cluster0.sop4p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

main().then(()=>{
    console.log("connected to DB");
}).catch(err=>{console.log(err);})

async function main() {
    await mongoose.connect(ATLASDB_URL)    
}

const initDB=async()=>{
    await Listing.deleteMany({});
   initData.data= initData.data.map((obj)=>({...obj,owner:"676c0d4a81da2945739fbefa"}))
    await Listing.insertMany(initData.data);
    console.log("data was initialized");

}

initDB();
