const express = require('express');
const connectDb = require('./config/db');
// const cors = require('cors');

const app = express();

//connect db
connectDb();
// init middleware
app.use(express.json({ extended: false }));
// app.use(cors())
// app.use(express.json())

app.get('/', (req, res) => res.send('Api Running'));

// // Define routees
app.use('/api/users', require('./api/users'));
app.use('/api/auth', require('./api/auth'));
app.use('/api/profile', require('./api/profile'));
app.use('/api/posts', require('./api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
