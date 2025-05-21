import express from "express";
import { totalRouter } from "./routes/total";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(totalRouter);

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export { app, server };
