import * as express from "express";
import UserService = require("../service/UserService");

class UserController {
    private localUserService: UserService;
    constructor() {
        this.localUserService = new UserService();
    }

    public createUser(req: express.Request, res: express.Response, next: express.NextFunction): void {
        console.log("Gteting createUser Routes");
        try {
            const user = req.body;
            console.log("Creating User Data : ", JSON.stringify(user));
            const userService = new UserService();
            userService.getUserData(user, (error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    console.log("Success Controller User Data : ", JSON.stringify(result));
                    res.send(result);
                }
            });
        } catch (e) {
            console.log("Exception in creating User Data . ", e);
        }
    }
}

export = UserController;
