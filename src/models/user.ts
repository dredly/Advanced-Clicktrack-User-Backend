import { prop, getModelForClass } from '@typegoose/typegoose';

class User {
  @prop()
  public username!: string;

  @prop()
  public name!: string;
}

const UserModel = getModelForClass(User);

export default UserModel;
