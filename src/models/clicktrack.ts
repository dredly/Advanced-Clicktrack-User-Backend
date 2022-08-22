import { prop, getModelForClass } from '@typegoose/typegoose';

class Clicktrack {
  @prop()
  public title!: string;

  @prop()
  public numSections!: string; //Temporary for testing
}

const ClicktrackModel = getModelForClass(Clicktrack);

export default ClicktrackModel;