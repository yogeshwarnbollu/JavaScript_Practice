const user = {}

user.id = "avs"
user.name = "usnername"
user.islogin = false

console.log(user);

const allUsers = {
    name: "name",
    fullname : {
        userfullname:{
            firstname: "ffff",
            lastname: "sddfs"
        }
    }
}

console.log(allUsers.fullname?.userfullname.firstname);


const obj1 = {a:"1", b:"2"}
const obj2 = {c:"1", d:"2"}
const obj3 = {e:"1", f:"2"}

// const obj4 = {obj1, obj2}

const obj4 = Object.assign(obj1,obj2)

const obj5 = Object.assign({},obj1,obj2)

console.log(obj5);

const obj6 = {...obj1,...obj2,...obj3}

console.log(obj6);


const user_obj = [
    {
        a:"1", b:"2"
    },
    {
        c:"1", d:"2"
    },
    {
        e:"1", f:"2"
    },
]

console.log(user_obj[1].a); 

console.log(Object.keys(allUsers));
console.log(Object.values(allUsers));
console.log(Object.entries(allUsers));