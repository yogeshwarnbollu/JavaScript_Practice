// singleton

//Object.create()

// object literals

const newsym = Symbol("key")

const new_object = {
    name: "yogesh",
    [newsym]: "key10",
    email: "yogeshwar@google.com",
    phone: 1234567890,
    isLoggedIn: false,
    lastLoggedDays: ["mon","tue","wen"]
}

console.log(new_object.email);
console.log(new_object["name"]);
console.log(new_object["lastLoggedDays"][0]);
console.log(new_object);

Object.freeze(new_object)

new_object.email = "email@email.com"

console.log(new_object);