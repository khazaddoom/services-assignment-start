import { UsersService } from "./users.service";
import { Injectable } from "@angular/core";

//@Injectable()
export class CounterService {

    activateRequestCount: number = 0;
    deActivateRequestCount: number = 0;



    // constructor(private users: UsersService) {
    //     this.users.requestRaisedEvent.subscribe(() => {
    //         console.log('Total number of Activation Requests: '  + this.activateRequestCount);
    //         console.log('Total number of DeActivation Requests: '  + this.deActivateRequestCount);
    //     })
    // }



}