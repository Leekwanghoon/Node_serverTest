const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
// const port = 4000;



app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/api', function (req, res) {
    console.log("여기오나")
    res.send({
        status:"200",
        message:"뿌우~~ I Love You",
        age:"30",
        description:"대리",
        location:"이천 메가커피",
        time:"11am"
    })
})
app.get('/api/test', function (req, res) {
    res.send({
        test:"3200",
        name:"test"
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

// https://nodeserverbackground.herokuapp.com/test