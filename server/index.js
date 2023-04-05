import express from "express";
import router from "./routes/routes.js";
const app = express();

app.use('/',router);

const PORT = 8000;

app.listen(PORT,()=> console.log(`Server is running on ${PORT}`));