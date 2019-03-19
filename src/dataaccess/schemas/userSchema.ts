import {Schema} from "mongoose";
import User = require("../mongoose/user");
import DataAccess = require("./../dataaccess");

const mongoose = DataAccess.mongooseInstance;
const mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {
    static get schema() {

        const user = new Schema({
                email: {
                    type: String
                },
                firstName: {
                    type: String
                },
                lastName: {
                    type: String
                },
            },
            {
                timestamps: true,
                versionKey: false
            });
        return user;
    }
}
const userSchema = mongooseConnection.model<User>("User", UserSchema.schema);
export = userSchema;
