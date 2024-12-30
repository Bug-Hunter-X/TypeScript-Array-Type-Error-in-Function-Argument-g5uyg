function greeter(person: string) {
  return "Hello, " + person;
}

function greeterArray(persons: string[]) {
  persons.forEach(person => console.log(greeter(person)));
}

let user = ["Jane User", "John Smith"];

greeterArray(user); // Correct usage with array of strings

console.log(greeter(user[0])); // Correct usage by accessing array element