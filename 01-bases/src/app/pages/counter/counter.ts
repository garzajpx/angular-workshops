import { Component } from "@angular/core";

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter.html',
})
export class CounterPageComponent {

  counter = 15;

  increaseBy(value: number){
    this.counter += value;
  }

  decreaseBy(value: number){
    this.counter -= value;
  }

  resetCounter(){
    this.counter = 15;
  }

}
