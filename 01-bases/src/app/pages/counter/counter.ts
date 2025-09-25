import { Component, signal } from "@angular/core";

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter.html',
  styles: `
    button {
      padding: 5px;
      margin: 5px 10px;
      width: 75px;
  `
})

export class CounterPageComponent {


  counter = 15;
  counterSignal = signal(15);

  increaseBy(value: number){
    this.counter += value;
    this.counterSignal.update( current => current + value );

  }

  decreaseBy(value: number){
    this.counter -= value;
    this.counterSignal.update( current => current - value );
  }

  resetCounter(){
    this.counter = 0;
    this.counterSignal.set(0);

  }

}
