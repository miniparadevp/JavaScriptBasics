class User {
  constructor(UserName, Password, Email) {
    this.UserName = UserName;
    this.Email = Email;
    this.Password = Password;
  }
  encryptPassword() {
    // return `${this.Password}abc`;
    return `${this.Password}abc`;
  }
}

const dev = new User("dev", "dev9173227", "devpminipara@gmail.com");

console.log(dev.encryptPassword());
