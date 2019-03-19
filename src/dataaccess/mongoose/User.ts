import * as mongoose from "mongoose";
import userModel = require("./../models/user");

interface IUser extends userModel, mongoose.Document {
    _id: string;
}
export = IUser;
