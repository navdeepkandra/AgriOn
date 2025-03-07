if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const Listing = require("./models/listing.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

const dbUrl = process.env.CONNECTION_STRING;

main().then(res => {
    console.log("Connection Successful");
}).catch(err => {
    console.log(err);
});

async function main(){
    await mongoose.connect(dbUrl);
}

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 60 * 60,
});

store.on("error", () => {
    console.log("Error in MONGO SESSION STORE");
});

const sessionOptions = {
    store: store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
}

// app.get("/", (req, res) => {
//     res.send("root is working");
// });
app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// app.get("/testListing", async (req, res) => {
//     let sampleListing = new Listing({
//         title: "Tomato Plant",
//         description: "High Quality Breed",
//         price: 0.40,
//         germinated_period: 30,
//         location: "Pavagada, Karnataka",
//         country: "India",
//     });

//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("successful testing");
// });

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})

// app.get("/demoUser", async (req, res) => {
//     let fakeUser = new User({
//         email: "navdeepkandra123@gmail.com",
//         username: "Navdeep123",
//     });

//     let registeredUser = await User.register(fakeUser, "Navdeep@123");
//     res.send(registeredUser);
// })

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

app.get("/about-us", (req, res) => {
    res.render("org/about.ejs");
});

app.get("/gallery", (req, res) => {
    res.render("org/gallery.ejs");
});

app.get("/accessories", (req, res) => {
    res.render("org/accessories.ejs");
});

app.get("/contact-us", (req, res) => {
    res.render("org/contactus.ejs");
});

app.get("/search", async (req, res) => {
    let query = req.query.q;
    let listings = await Listing.find({country: `${query}`});
    if(listings.length){
        res.render("org/search.ejs", {listings, query});
    } else{
        req.flash("error", "Requested country is not listed");
        res.redirect("/listings");
    }
});

app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found!"));
});

app.use((err, req, res, next) => {
    let {statusCode = 500, message = "Something went wrong"} = err;
    res.status(statusCode).render("error.ejs", {message});
});

app.listen(8080, () => {
    console.log("App is listening to port 8080");
});