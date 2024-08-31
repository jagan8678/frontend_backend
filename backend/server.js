const express=require('express');
const cors=require('cors')
const app=express();
const port=5000;
app.use(express.json());
const corsOptions={
    origin:'http://localhost:3000',
    methods:['GET','POST','PUT','DELETE','OPTIONS'],
    allowedHeaders:['Content-Type','Authorization']
}
app.use(cors(corsOptions));
app.use(express.json());


app.get('/api/message',(req,res)=>{
    res.send({message:'hello from the backend'});
})
app.get('/api/message1',(req,res)=>{
    res.send({message:'my name is jagan'});
})

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
});