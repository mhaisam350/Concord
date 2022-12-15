const express = require('express');

const app = express();

const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const PORT = process.env.PORT;

app.listen(3000, () => console.log(`Server is running on port ${PORT}`));