import { User } from "./models/User";

const user = new User({ id: 1, name: "Jesus", age: 30303 });

user.on("save", () => {
  console.log(user);
});

user.save();
