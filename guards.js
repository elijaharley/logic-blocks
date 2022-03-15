const fs = require('fs/promises')

return fs.readFile('./data.txt', 'utf-8').then((data) => {
   const arr = data.split('[1518-').sort().slice(1)
   let info = []
   let curr = 0
arr.map((shift, index) => {
    if (shift.includes('Guard')){
    const date = shift.slice(0, 5)
    const str = shift.slice(20, 24)
    const guardNum = +str.split(' ')[0]
        info[index] = {guard: guardNum, clockInDate: date, time: [], sleep: 0, wake: 0, total: 0}
        curr = index
    }
    else info[curr].time.push(+shift.slice(9,11))
})

const snoozetimes = []
const totals = info.map((item) => {
   for (let i = 0; i< item.time.length; i++){
    if (i % 2 === 0) {
        item.sleep += item.time[i]
} else {
    item.wake +=item.time[i]
}
   }
       
  item.total = item.wake - item.sleep
  snoozetimes.push({guard:+item.guard, sleep: item.total})
})

const longest = Math.max.apply(Math, snoozetimes.map((guards) => {return guards.sleep }))
const biggestSnoozer = snoozetimes.filter((guard) => guard.sleep === longest)
console.log(biggestSnoozer)

})
//    let date = arr[0].slice(0, 5)
//    let guard 
//    const objArr = []
//    const newObj = arr.forEach((entry, index) => {

// const time = entry.slice(6, 11)
// let log = entry.slice(13)
// if(entry.includes('Guard')){
// guard = entry.slice(20, 24)
// if(!date.match(entry.slice(0, 5))){
//     date = entry.slice(0,5)
//     objArr.push({ date: date,
//         time: time, log: log, guard: guard})
//     }
// }
// else{
//     objArr.push({ date: date,
//         time: time, log: log, guard: guard})}
//     })
//     const guardArr = []
//     objArr.forEach((item) => {
// const guardNum = +item.guard.split(' ')[0]
// if (!guardArr.includes(guardNum)){
//     guardArr.push(guardNum)
// }
// })
// const sortedGuards = guardArr.sort((a, b) => a-b)
// const blah = []
// sortedGuards.map((guard) => {
//    const guardsArr = objArr.filter((obj) => +obj.guard.split(' ') === guard)
//    blah.push(guardsArr)
// })
// })  
