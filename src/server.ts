import express from 'express'

const app = express();

app.get('/users',( request, response) => {



    response.json([
        "Diego",
        "Victor",
        "Douglas"
    ])
})


app.listen(3333)
