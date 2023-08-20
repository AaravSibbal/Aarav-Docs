"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class user {
    firstName;
    lastName;
    email;
    UUID;
    constructor() {
        this.firstName = null;
        this.lastName = null;
        this.email = null;
        this.UUID = null;
    }
    setFirstName(firstName) {
        this.firstName = firstName;
    }
    setLastName(lastName) {
        this.lastName = lastName;
    }
    setEmail(email) {
        this.email = email;
    }
}
let aarav = new user();
console.log(aarav.email);
