const express = require("express");
const cors = require("cors");
const db = require("./src/database/database");
const {
  adminRoutes,
  authRoutes,
  autreRoutes,
  categoryRoutes,
  emailRoutes,
  emplacementRoutes,
  employeRoutes,
  ordinateurRoutes,
  proprietaireRoutes,
  serveurRoutes,
  wifiRoutes,
} = require("./src/routes/import/import.route");

const app = express();
const port = 6589;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//route
app
  .use("/api/admin", adminRoutes)
  .use("/api/auth", authRoutes)
  .use("/api/autre", autreRoutes)
  .use("/api/category", categoryRoutes)
  .use("/api/email", emailRoutes)
  .use("/api/emplacement", emplacementRoutes)
  .use("/api/employe", employeRoutes)
  .use("/api/ordinateur", ordinateurRoutes)
  .use("/api/proprietaire", proprietaireRoutes)
  .use("/api/serveur", serveurRoutes)
  .use("/api/wifi", wifiRoutes);

//connection database
db.connect((err) => {
  if (err) throw err;
  console.log("Database connected !!!");
});

//connection server
app.listen(port, () => {
  console.log(`server listening to port ${port}`);
});
