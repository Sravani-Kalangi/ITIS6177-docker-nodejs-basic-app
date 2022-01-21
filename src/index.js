const express = require('express')

const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).json({message: 'Docker is fun! This is my second week in ITIS6177 which is also fun!'})
});

const port = process.env.port || 8080

app.listen(port,()=>{
    console.log(`app is listening on http://localhost:${port}`)
})