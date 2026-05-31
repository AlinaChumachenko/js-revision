const users = [
    {firstName: "Alina",
        city: "Odesa"    },
    {firstName: "Anna",
        city: "Kyiv"  }
];

console.log(users[0].firstName);
console.log(users[1].firstName);
users.push({firstName: "Ivan", city: "Lviv"});
console.log(users);