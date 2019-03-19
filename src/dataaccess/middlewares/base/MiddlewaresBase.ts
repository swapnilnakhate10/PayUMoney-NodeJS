import bodyParser = require("body-parser");
import express = require("express");

import BaseRoutes = require("./../../../routes/index");
import MethodOverride = require("./../MethodOverride");

class MiddlewaresBase {

    static get configuration() {
         const app = express();
         app.use(bodyParser.json({limit: "50mb"}));
         app.use(MethodOverride.configuration());

         return app;
    }
}
Object.seal(MiddlewaresBase);
export = MiddlewaresBase;
