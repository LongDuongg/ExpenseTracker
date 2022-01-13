const {setKey} = require("./objects");

const obj = {a:1, b:2};
const newObj = setKey(obj, "b", 3);
console.log(obj)
console.log(newObj)