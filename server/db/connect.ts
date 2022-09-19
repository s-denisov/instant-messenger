import mongoose from 'mongoose';

export default () => {
  const dbUri = process.env.ATLAS_URI!;
  mongoose.connect('mongodb+srv://denisovseny:icPSzwbbTciGiFA8@cluster0.onoldsy.mongodb.net/instant-messenger?retryWrites=true&w=majority');
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
};
