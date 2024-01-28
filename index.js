const express = require('express');
const product = require('./Routes/product');
const app = express();
const cors = require('cors');
const PORT = 3003;


app.use(cors()); 
app.use("/", product);

const server = app.listen(PORT, () => {
    console.log('Server is running..');
});
 