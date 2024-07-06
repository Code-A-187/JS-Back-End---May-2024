const express = require('express')

const app = express()
const port = 3000

app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) =>{
    res.send(`<form action='login' method='post'>
    <label>Username</label>
    <input type="username" name='username'>
    <label>Password</label>
    <input type="password" name='password'>
    <input type="submit" value='login'>
    </form>`)
})


// TODO: Set cookie
app.post('/login', (req, res) => {
    console.log(req.body)

    res.header('Set-Cookie', `loginInfo =${req.body.username}`);
    res.end()

})


app.listen(port, () => {
    console.log(`Server is listening on ${port}`)
})