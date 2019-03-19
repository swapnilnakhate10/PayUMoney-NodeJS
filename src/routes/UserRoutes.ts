import express = require("express");
import UserController = require("../controllers/UserController");
const router = express.Router();

class UserRoutes {

    private userController: UserController;

    constructor() {
        this.userController = new UserController();
    }

    get routes(): express.Router {
        console.log("Gteting user Routes");
        router.get("/get", this.userController.createUser);
        return router;
    }
}

Object.seal(UserRoutes);
export = UserRoutes ;
