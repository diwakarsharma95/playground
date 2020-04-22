const http = require('http')
const url = `http://api.weatherstack.com/current?access_key=d82468890da06c4025d831a79423be22&query=$45,-70&units=m`

const request = http.request(url, (response) => {
    let data = ''
    response.on('data', (chunk)=> {
        data += chunk.toString()
    })
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})
request.end()