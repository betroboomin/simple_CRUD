const express = require("express");
const app = express();

app.use(express.json());


//route
app.get('/', (req,res)=>{
    res.send('Hello young man')
})

app.listen(3001, ()=> {console.log("server is running on port 3001");
});

module.exports = app;