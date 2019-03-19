import {UserInfo} from "os";
import User = require("../dataaccess/mongoose/User");
import UserRepository = require("../dataaccess/repository/UserRepository");

class UserService {

    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    public getUserData(user: User, callback: (error: any, response: any) => void) {
        console.log("Service User Data : ", JSON.stringify(user));
        // callback(null, user);
        this.userRepository.create(user, (error, result) => {
            if (error) {
                console.log("Error Service User Data : ", JSON.stringify(error));
                callback(error, null);
            } else {
                console.log("Success Service User Data : ", JSON.stringify(result));
                callback(null, result);
            }
        });
    }
}

Object.seal(UserService);
export = UserService;
