const express = require("express");
const cors = require("cors");
const db = require("./src/database/database");
const {
  adminRoutes,
  authRoutes,
  autreRoutes,
  categoryRoutes,
  proprietaireRoutes,
  serviceRoutes,
  societeRoutes,
} = require("./src/routes/import/import.route");

const app = express();
const port = 6589;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [
      "http://localhost:3005",
      "http://192.168.100.187:3005",
      "http://172.25.89.90:3005",
      "http://localhost:3000",
      "http://192.168.100.187:3000",
      "http://172.25.89.90:3000",
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

//route
app
  .use("/api/admin", adminRoutes)
  .use("/api/auth", authRoutes)
  .use("/api/autre", autreRoutes)
  .use("/api/category", categoryRoutes)
  .use("/api/proprietaire", proprietaireRoutes)
  .use("/api/service", serviceRoutes)
  .use("/api/societe", societeRoutes);

//connection database
db.connect((err) => {
  if (err) throw err;
  console.log("Database connected !!!");
});

//connection server
app.listen(port, () => {
  console.log(`server listening to port ${port}`);
});
