import * as express from "express";
import PaymentRoutes = require("./PaymentRoutes");
import UserRoutes = require("./UserRoutes");

const app = express();

class BaseRoutes {
    get routes() {
        console.log("Routes Init");
        app.use("/api/user/", new UserRoutes().routes);
        app.use("/api/payment/", new PaymentRoutes().routes);
        return app;
    }
}
export = BaseRoutes;
