import mongoose, { Document, Schema, Model, Types } from 'mongoose';
import { IUser } from './interfaces';

export interface IUserModel extends IUser, Document {
  _id: Types.ObjectId;
  uid: string; 
}

const UserSchema: Schema = new Schema({
  uid: { type: String, required: true, unique: true }, 
  name: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const User: Model<IUserModel> = mongoose.models.User || mongoose.model<IUserModel>('User', UserSchema);
export default User;
