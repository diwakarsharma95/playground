
const add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b)
            reject("Things went wrong")
        },2000)
    })
}

// add(1,2).then((sum) => {
//     console.log(sum)
//     add(sum, 5).then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })
// }).catch((error) => {
//     console.log(error)
// })

add(1,2).then((sum) => {
    console.log(sum)
    return add(sum, 4)
}).then((sum1) => {
    console.log(sum1)
    return add(sum1, 1)
}).then((sum2) => {
    console.log(sum2)
}).catch((error) => {
    console.log(error)
})