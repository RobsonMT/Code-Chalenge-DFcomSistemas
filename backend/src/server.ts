import app from './app';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 5000;

import mongoose from 'mongoose';
mongoose.connect(process.env.MONGO_URI || '')
  .then(() => {
    app.listen(PORT, () => console.log(`Server on port ${PORT}`));
  });
