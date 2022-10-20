// jwt = json web token
const jwt = require('jsonwebtoken')

// generate a json web token
const payload = {
    email: "michael.caines@nscc.ca"
}
const secretKey = "mylittlesecret"

// jwt.sign(payload, secretKey, {}, (err,token) => {
//     console.log(token)
// })

const sampleToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pY2hhZWwuY2FpbmVzQG5zY2MuY2EiLCJpYXQiOjE2NjYyOTEyMDB9.XkHwVtW3kvVM_g_5oKMgNN53DIGllwF1Ix1B1ySYebo"

jwt.verify(sampleToken,secretKey,(err, payload) => {
    if(err){
        console.log(err.message)
        return
    }
    console.log(payload)
})