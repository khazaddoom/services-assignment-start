import { CounterService } from "./counter.service";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class UsersService {

    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    //requestRaisedEvent = new EventEmitter<void>();

    constructor(private counterServiceInstance: CounterService) {}

    markAsInactive(index: number) {

        // console.log('Request to inactivate : ' + this.activeUsers[index]);

        this.inactiveUsers.push(this.activeUsers[index]);
        this.activeUsers.splice(index, 1);
        this.counterServiceInstance.deActivateRequestCount++;
       // this.requestRaisedEvent.emit();
       
    }

    markAsActive(index: number) {
        // console.log('Request to activate : ' + this.inactiveUsers[index]);
        this.activeUsers.push(this.inactiveUsers[index]);
        this.inactiveUsers.splice(index, 1);
        this.counterServiceInstance.activateRequestCount++;
        // this.requestRaisedEvent.emit();
    }

}