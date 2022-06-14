const express = require('express')
const app = express()
const port = 5000
const axios = require('axios')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/place/lat/:lat/long/:long/keyword/:keyword', (req, res) => {

    let URL =
        "https://maps.googleapis.com/maps/api/place/nearbysearch/json?&location=" +
        req.params.lat +
        "%2C" +
        req.params.long +
        "&rankby=distance&type=" +
        req.params.keyword +
        "&key=AIzaSyD5znsUPPrtztE1KJcBRftdK444DyJyyDg";
    console.log(URL)

    axios.get(URL)
        .then(function (response) {
            res.json(response.data)
        })
        .catch(function (error) {
            res.send("fail:" + error)
        })
})

app.listen(port, () => {
    console.log(`Chat bot listening on ${port}`)
})