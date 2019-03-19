interface IRead<T> {
  retrieve: (field: any, callback: (error: any, result: any) => void) => void;
  /*findById: (id: string, callback: (error: any, result: T) => void) => void;
  findAndPopulate: (field: any, populateField: any, callback: (err: any, result: any) => void) => void;*/
}

export = IRead;
