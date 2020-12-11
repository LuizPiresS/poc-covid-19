import mongoose from '../index'

const UserSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true
  }
})

const User = mongoose.model('User', UserSchema)

export default User
