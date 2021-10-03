const express = require('express');
const app = express();
// const port = process.env.PORT || 4000;
const port = 4000;



app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/api', function (req, res) {
    console.log("여기오나")
    res.send({
        status:"200",
        name:"최승연"
    })
})
app.post('/api/login', function (req, res) {
    console.log("들어오나")
    console.log(req.body)
    
    res.send({
        status:"성공"
    })
})

app.listen(port, () => {
    console.log(`server is listening at localhost:${port}`);
});