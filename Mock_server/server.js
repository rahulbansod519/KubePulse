import express from 'express';
import bodyParser from 'body-parser';

const app = express()
app.use(bodyParser.json());

app.get('/hello', (req, res) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
})
app.post('/metrics', (req,res) => {
    console.log("Metrics : ", req.body);
    res.send({status: 'Recieved metrics'});
})

app.listen(3000, () => {
    console.log("Mock Saas server is running on port 3000")
})