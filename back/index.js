const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require ("cors")

const userRoutes = require('./routes/user.routes');
const reportsRoutes = require('./routes/reports.routes');
const spentRoutes = require('./routes/spent.routes');
const spentInvoices = require('./routes/invoices.routes');

dotenv.config();
const app = express();

app.use(express.json());

app.use(cors())

const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('Error connecting to MongoDB', err));

app.use('/api/invoices', invoicesRoutes);
app.use('/api/reports', reportsRoutes);
app.use('/api/spent', spentRoutes);
app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
