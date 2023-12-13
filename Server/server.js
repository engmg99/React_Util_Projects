const express = require("express")
const axios = require('axios')
const cors = require('cors')
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 5000
app.use(cors())
app.get('/getNews/:category/:newsPage/:pageSize', async (req, res) => {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${req.params.category}&apiKey=${process.env.NEWS_API_KEY}&page=${req.params.newsPage}&pageSize=${req.params.pageSize}`)
    res.json(response.data)
    // console.log(response.data)
})
app.listen(PORT, () => console.log(`Server is listening on ${PORT}`))