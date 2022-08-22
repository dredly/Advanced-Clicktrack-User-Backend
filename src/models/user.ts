import { prop, getModelForClass } from '@typegoose/typegoose';

class User {
  @prop()
  public username!: string;
}

const UserModel = getModelForClass(User);

export default UserModel;
