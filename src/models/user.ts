import { prop, getModelForClass } from '@typegoose/typegoose';

class User {
  @prop()
  public username!: string;

  @prop()
  public name!: string;
}

export const UserModel = getModelForClass(User);
