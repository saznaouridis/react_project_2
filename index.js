const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./queries');
const countryRoutes = require('./queries');

app.use(express.json());   // 
app.use(express.urlencoded({  
  extended: true,
})
)
//middleware
app.use(cors());
app.options('*', cors()); // include before other routes
// GET Request to root URL (/)
app.use("/",countryRoutes); // mount the countryRoutes on the app
app.listen(4000, () => {
console.log(`server has started on port ${4000}.`)
})
module.exports = app;