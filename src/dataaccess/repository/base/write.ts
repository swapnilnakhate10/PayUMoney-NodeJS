import * as mongoose from "mongoose";
interface IWrite<T> {
  create: (item: T, callback: (error: any, result: any) => void) => void;
  /*update: (_id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) => void ;
  delete: (_id: string, callback: (error: any, result: any) => void) => void;
  findOneAndUpdate: (query: any, newData: any, option: any, callback: (error: any, result: any) => void) => void;*/
  /*insertMany:(items, callback:(err: any, result: any ) => void)=>void;*/
}

export = IWrite;
