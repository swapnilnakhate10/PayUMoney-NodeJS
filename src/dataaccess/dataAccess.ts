import * as Mongoose from "mongoose";

class DataAccess {
    public static mongooseInstance: any;
    public static mongooseConnection: Mongoose.Connection;

    public static connect(): Mongoose.Connection {
        if (this.mongooseInstance) { return this.mongooseInstance; }

        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once("open", () => {
            console.log("Connected to mongodb.");
        });
        Mongoose.set("debug", true);
        this.mongooseInstance = Mongoose.connect("mongodb://127.0.0.1:27017/my_db");
        return this.mongooseInstance;
    }
}
DataAccess.connect();
export = DataAccess;
