let person = {
  name: "jake",
  age: 26,
  hobbies: ["Sports", "Cooking"],
};

let favoriteStuff: string[] = ["Cushion", "Mic"];

for (const str in person) {
  console.log(str.toUpperCase());
  // console.log(str.map()); ERROR!
}

console.log(person.age);
