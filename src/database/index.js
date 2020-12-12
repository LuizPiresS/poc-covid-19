import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://lps:qA17TabS72SMiOu2@cluster0.nxdyj.mongodb.net/poc-covid?retryWrites=true&w=majority')
mongoose.Promise = global.Promise

export default mongoose
