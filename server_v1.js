const express = require("express");
const path = require("path");
const PORT = process.env.port || 3001;
const app = express();


// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// map API routes
app.use("/api",apiRoutes);

// catch-all routing 
// TODO: is this even needed?
app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
})

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/books");

// start API server
app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
})
