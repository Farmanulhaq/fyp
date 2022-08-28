import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import authRoutes from './routes/auth.js'
import elementaryRoutes from './routes/elementary.js'
import connectMongoDB from './config/dbConn.js';

//MongoDB Connection
connectMongoDB();

const app = express();
app.use(cors());

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/elementary', elementaryRoutes);



const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => console.log(`Server running at port ${PORT}`));

process.on('unhandledRejection', (err, promise) => {
    console.log(`Logged Error: ${err}`);
    server.close(() => process.exit(1));
});