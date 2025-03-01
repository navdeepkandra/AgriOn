const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main().then(res => {
    console.log("Connection Successful");
}).catch(err => {
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/AgriOn");
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: '67ba10c04c00a6598f61f2b8'}))
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();