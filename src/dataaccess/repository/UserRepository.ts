import UserSchema = require("../schemas/UserSchema");
import User = require("./../mongoose/user");

import RepositoryBase = require("./base/repository.base");

class UserRepository extends RepositoryBase<User> {

  constructor() {
    super(UserSchema);
  }

}

Object.seal(UserRepository);
export = UserRepository;
