import { Injectable } from "@angular/core"
import { AppComponent } from "../app.component"

Injectable()
export class LoggerService{
    LogMessage(name: string, status: string){
        console.log(`A new user with name ${name} with status ${status} is added to user list.`)
    }
}