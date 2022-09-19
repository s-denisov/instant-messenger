import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const userSchema = new mongoose.Schema({});
userSchema.plugin(passportLocalMongoose);
export default mongoose.model('User', userSchema);
