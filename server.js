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
app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
})
app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
})