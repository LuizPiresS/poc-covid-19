import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/poc-covid-19')
mongoose.Promise = global.Promise

export default mongoose
