import bodyParser =  require("body-parser");
import compression =  require("compression");
import cors = require("cors");
import express = require("express");
import methodOverride = require("method-override");

class MethodOverride {

   public static configuration(): any {
        const app = express();
        app.use(methodOverride("X-HTTP-Method"));
        app.use(methodOverride("X-HTTP-Method-Override"));
        app.use(methodOverride("X-Method-Override"));
        app.use(methodOverride("_method"));

        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json({limit: "40mb"}));
        app.use(bodyParser.urlencoded({limit: "40mb", extended: true}));
        app.use(bodyParser.text());
        app.use(compression());
        app.use(cors());
        app.use(bodyParser.json());
        app.use(express.static("src/"));
        return app;
    }
}

Object.seal(MethodOverride);
export = MethodOverride;
