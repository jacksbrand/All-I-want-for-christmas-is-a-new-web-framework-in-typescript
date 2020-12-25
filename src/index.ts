import { User } from "./models/User";

const user = new User({ name: "Jack", age: 20 });

console.log(user.get("name"));
console.log(user.get("age"));

user.set({ age: 65, name: "Irene" });

console.log(user.get("name"));
console.log(user.get("age"));
