const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/databaseConfig');
const productRoutes = require('./Routes/ProductRoute');
const userRoutes = require('./Routes/UserRoutes');

dotenv.config(); // Load environment variables from .env file
connectDB(); // connect to MongoDB

app.use(express.json()); // Middleware to parse JSON request bodies


app.use('/products', productRoutes); // Use product routes for /products endpoint
app.use('/users', userRoutes);  // Use user routes for /users endpoint



app.listen(process.env.PORT || 1000, () => {
    console.log(`Server is running on port ${process.env.PORT || 1000}`);
});
