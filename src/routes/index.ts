import * as express from "express";
import UserRoutes = require("./UserRoutes");

const app = express();

class BaseRoutes {
    get routes() {
        console.log("Routes Init");
        app.use("/api/user/", new UserRoutes().routes);
        return app;
    }
}
export = BaseRoutes;
