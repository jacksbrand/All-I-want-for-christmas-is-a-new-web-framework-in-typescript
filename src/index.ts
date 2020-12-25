import { User } from "./models/User";

const user = new User({ name: "Jack", age: 20 });

user.on("change", () => {
  console.log("Change 1");
});
user.on("change", () => {
  console.log("Change 2");
});
user.on("click", () => {
  console.log("you clicked");
});

user.trigger("change");
