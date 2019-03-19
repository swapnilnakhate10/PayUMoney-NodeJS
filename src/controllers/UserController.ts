import * as express from "express";
import UserService = require("../service/UserService");

class UserController {
    private localUserService: UserService;
    constructor() {
        this.localUserService = new UserService();
    }

    public createUser(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            const user = req.body;
            const userService = new UserService();
            userService.createUser(user, (error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            console.log("Exception in creating User Data . ", e);
        }
    }

    public getAllUsers(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            const userService = new UserService();
            userService.getUserData((error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            console.log("Exception in creating User Data . ", e);
        }
    }
}

export = UserController;
