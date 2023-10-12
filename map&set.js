class Users {
  constructor(newusers) {
    this.storage = new Map();
    this.addUsers(newusers);
    //if(Array.isArray(newusers)){
    // newusers.forEach(user => this.addUsers(user));
    // }
  }

  addUsers(user) {
    this.storage.set(user.id, user);
    if (Array.isArray(user)) {
      user.forEach((user) => this.addUsers(user));
    }
  }

  getUserById(id) {
    return this.storage.get(id);
  }
}

const mappedUser = new Users([
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
]);

console.log(mappedUser.getUserById(1));

mappedUser.addUsers([{ id: 3, name: "Ann", email: "ann@example.com" }]);

console.log(mappedUser.getUserById(3));
