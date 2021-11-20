/**
 *
 */

import * as mainCtrl from "./controllers/MainController";
import * as contactCtrl from "./controllers/ContactController";

import express from "express";
import bodyParser from "body-parser";
import path from "path";

const app = express();

/**
 * Configure Express to use EJS
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * define a route handler for the default home page
 */
app.get("/api", mainCtrl.getHealth);

app.get("/contact", contactCtrl.getContact);
app.get("/contacts", contactCtrl.getContacts);
app.post("/contact",  contactCtrl.postContact);

app.get("/", (req, res) => {
    res.render("index");
});

export default app;
