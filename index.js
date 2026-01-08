const express = require("express");
const dotenv = require("dotenv");
const sequelize = require('./config/database')
require('./model/employee')
const app = express();

app.use(express.json());
dotenv.config();


(async () => {  
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
})();

const EmpRoute  = require('./routes/empRoute');
const imageRoute= require('./routes/imageRoute');
app.use('/employee',EmpRoute);
app.use('/images',imageRoute);
// sequelize.sync()


// app.get("/", (req, res) => {
//   res.send("API running");
// });


app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});