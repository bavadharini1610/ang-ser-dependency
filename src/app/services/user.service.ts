import { EventEmitter, Injectable } from "@angular/core";
import { User } from "../models/user";
import { LoggerService } from "./logger.service";

@Injectable()
export class UserService{
    constructor(private logger:LoggerService){}
    users:User[]=[
        new User('Steve Smith', 'Male','Monthly','Active'),
        new User('Mary Jane', 'Female','Yearly','InActive'),
        new User('Mark Tyler', 'Male','Quarterly','Active'),
    ];

    getAllUsers(){
        return this.users;
    }

    OnUserDetailsClicked: EventEmitter<User> = new EventEmitter<User>();

    onShowUserDetails(user:User){
        this.OnUserDetailsClicked.emit(user);
    }

    createUser(name:string, gender:string,subType:string,status:string){
        let user = new User(name, gender, subType,status);
        this.users.push(user);
        //let logger = new LoggerService();
        this.logger.LogMessage(name,status);
    }
}