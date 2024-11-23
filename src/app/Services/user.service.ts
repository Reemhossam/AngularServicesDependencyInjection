import { EventEmitter, Injectable } from "@angular/core";
import { User } from "../Models/User";
import { LoggerService } from "./logger.service";
import { AppComponent } from "../app.component";

@Injectable()
export class userService{
    constructor(private loggerService: LoggerService){

    }
users:User[] = [
    new User("Ahmed Samy","Male","Monthly","Active"),
    new User("Reem Hossam","Female","Yearly","Inactive"),
    new User("Mohmmed Ali","Male","Quaterly","Active")
];
myEvent: EventEmitter<User>=new EventEmitter<User>();
onMyEventEmit(user:User){
    this.myEvent.emit(user);
}

GetAllUser(){
    return this.users;
}
CreateUser(name:string, gender:string, subType:string, status:string){
    this.users.push(new User(name, gender, subType, status));
    this.loggerService.LogMessage(name,status);
}
}