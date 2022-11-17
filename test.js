let a = {
    car: "volov",
    price: "2000000$",
    weight: "1000kg",
    sell: function() {
        return "this car is " + this.price
    }
}

let message = a.sell()

console.log(message)

let test_array = [1,2,23,12,3,14]
console.log(Math.max.apply(null, test_array))

test_array.sort(function(a,b){return a-b})
console.log(test_array)

let ans = test_array.splice(1,2)
console.log(ans)
console.log(test_array)

const time = new Date()
console.log(time)