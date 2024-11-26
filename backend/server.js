import express from 'express';
import cors from 'cors';
import movies from './api/movies.route.js';

const app = express();

app.use(cors());

// JSON parsing middleware enables server to read, write in JSON 
app.use(express.json());

app.use("/api/v1/movies", movies);
app.use("*" , (req,res) => {
    res.status(404).json({error: "Not Found"})
})

export default app