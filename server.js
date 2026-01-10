const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res)=> {
    res.send('Gadget-Hub Backend Running');
});
app.listen(3000, ()=> {
    console.log('server running on port 3000');
    
    const authroutes = require('./routes/authRoutes');
    app.use('/api/auth' authmRoutes);
});