import { UUID } from "crypto";

class user{
    firstName: string|null;
    lastName: string|null;
    email: string|null;
    UUID: UUID|null;

    constructor(){
        this.firstName = null;
        this.lastName = null;
        this.email = null;
        this.UUID = null;
    }

    setFirstName(firstName:string){
        this.firstName = firstName;
    }
    
    setLastName(lastName:string){
        this.lastName = lastName;
    }

    setEmail(email:string){
        this.email = email;
    }
}
let aarav = new user();
console.log(aarav.email)
