const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const static = express.static(__dirname + "/public");
const session = require('express-session');
var cookieParser = require('cookie-parser');

const configRoutes = require("./routes/index");
const exphbs = require("express-handlebars");
const handlebars = require("handlebars");

const handlebarsInstance = exphbs.create({
  defaultLayout: "main",
  // Specify helpers which are only registered on this instance.
  helpers: {
      asJSON: (obj, spacing) => {
          if (typeof spacing === "number")
              return new handlebars.SafeString(JSON.stringify(obj, null, spacing));

          return new handlebars.SafeString(JSON.stringify(obj));
      }
  }
});

const rewriteUnsupportedBrowserMethods = (req, res, next) => {
  // If the user posts to the server with a property called _method, rewrite the req's method
  // To be that method; so if they post _method=PUT you can now allow browsers to POST to a route that gets
  // rewritten in this middleware to a PUT route
  if (req.body && req.body._method) {
      req.method = req.body._method;
      delete req.body._method;
  }

  // let the next middleware run:
  next();
};

app.use("/public", static);
app.use(bodyParser.json());
app.use(rewriteUnsupportedBrowserMethods);
app.use(cookieParser());
app.use(bodyParser.urlencoded());

app.use(session({
     name: 'AuthCookie',
     secret: 'some secret string!',
     reqave: false,
     saveUninitialized: true
   }))

app.engine("handlebars", handlebarsInstance.engine);
app.set("view engine", "handlebars");

configRoutes(app);

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3000");
});