var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    mongoose       = require("mongoose"),
    passport       = require("passport"),
    cookieParser   = require("cookie-parser"),
    LocalStrategy  = require("passport-local"),
    flash          = require("connect-flash"),
    Campground     = require("./models/campground"),
    Comment        = require("./models/comment"),
    User           = require("./models/user"),
    session        = require("express-session"),
    methodOverride = require("method-override");
    
//requiring routes
var commentRoutes    = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes      = require("./routes/index");

    

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));
app.use(cookieParser('secret'));


// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "adib is kurt",
    resave: false,
    saveUninitialized: false
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.success = req.flash('success');
   res.locals.error = req.flash('error');
   next();
});


app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

// Restful routing

// main menu

app.get("/menu", function(req, res){
    res.render("menu");
});


// programmer/ student

app.get("/programmer", function(req, res){
    res.render("programmer");
});


// contact

app.get("/contact", function(req, res){
    res.render("contact");
});

// gallery

app.get("/gallery", function(req, res){
    res.render("gallery/index");
});

// privacy policy


app.get("/policy", function(req, res){
    res.render("policy");
});


// about 

app.get("/about", function(req, res){
    res.render("about");
});



// business 


app.get("/business", function(req, res){
    res.render("business");
});

// server Listen 

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The server has started!");
});