const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./src/routes/user.route');
const connectDB = require('./src/config/db.config');

app.use(express.json())
app.use(cors());
app.use(userRoutes)

connectDB()

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})
