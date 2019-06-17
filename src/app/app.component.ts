import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  
  // activeUsers: string[] = [] ;
  // inactiveUsers: string[] = [] ;

  // onSetToInactive(id: number) {
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  // }

  // onSetToActive(id: number) {
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  // }

  activeCount: number = 0;
  deActiveCount: number = 0;

  constructor(private counter: CounterService) { 
    this.counter.someEvent.subscribe(()=> {
      this.activeCount = this.counter.activateRequestCount;
      this.deActiveCount = this.counter.deActivateRequestCount;
    });
  }

  // ngOnInit() {
  //   console.log('ngOnInit called');
  //   this.activeCount = this.counter.activateRequestCount;
  //   this.deActiveCount = this.counter.deActivateRequestCount;
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnChanges called');
  // }
  
}
