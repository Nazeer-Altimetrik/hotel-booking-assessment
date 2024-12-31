import express from 'express';
import securitySetup from './config/cors';
import routerSetup from './router/routerSetup';
import dotenv from 'dotenv';
dotenv.config()

const app = express();
securitySetup(app, express);
app.use("/api", routerSetup);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
  });