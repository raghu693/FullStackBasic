import express from "express"
let app = express()
let port = 3000

// app.get('/', (req, res)=>{
//     res.send('Hello world!')
// })



app.get("/api/jokes", (req, res)=>{
    let jokes = [
        {
            id:1,
            title:"A Joke",
            contact:"Fisrt joke"
        },
        {
            id:2,
            title:"A another Joke",
            contact:"Fisrt another joke"
        },
        {
            id:3,
            title:"A Fisrt another Joke",
            contact:"Fisrt second joke"
        },
        {
            id:4,
            title:"A normal Joke",
            contact:"Fisrt normal joke"
        },
        {
            id:5,
            title:"A hard Joke",
            contact:"Fisrt yoyoyoyoyoo joke"
        }
    ]
    res.send(jokes)
})

app.listen(port, ()=>{
    console.log('server at 3000')
})
