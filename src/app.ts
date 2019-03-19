import * as express from "express";
import Middlewares = require("./dataaccess/middlewares/base/MiddlewaresBase");
import BaseRoutes = require("./routes");

/**
 * Import Controllers (route handlers).
 */

/**
 * Create Express server.
 */
const app = express();

app.set("port", process.env.PORT || 8080);

/**
 * Start Express server.
 */
app.all("/*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use(Middlewares.configuration);
app.use(new BaseRoutes().routes);

app.listen(app.get("port"), () => {
    console.log("server started at http://localhost:" + app.get("port"));
});

module.exports = app;
