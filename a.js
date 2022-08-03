let arr = [1, 2]
let a = [...arr]
a.push(4)
a = a.concat(arr)
console.log(a, arr);