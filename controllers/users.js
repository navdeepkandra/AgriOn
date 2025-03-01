const User = require("../models/user");

module.exports.renderSignUpForm = (req, res) => {
    res.render("users/signup.ejs");
}

module.exports.signup = async (req, res) => {
    try{
        let {username, email, password} = req.body;
        const newUser = await new User({email, username});
        const registeredUser = await User.register(newUser, password);
        req.logIn(registeredUser, (err) => {
            if(err) {
                return next(err);
            }
            req.flash("success", "Welcome to AgriOn!");
            res.redirect("/listings");
        })
    } catch(e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
}

module.exports.login = async (req, res) => {
    req.flash("success", "Welcome back to AgriOn!");
    let redirectedUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectedUrl);
}

module.exports.logout = (req, res, next) => {
    req.logOut((err) => {
        if(err) {
            return next(err);
        }
        req.flash("success", "You are logged out!");
        res.redirect("/listings");
    })
}