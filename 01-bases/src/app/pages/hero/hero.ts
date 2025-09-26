import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero.html',
  imports: [UpperCasePipe]
})

export class HeroPageComponent {

  name = signal('Ironamn');
  age = signal(45);

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  })

  capitalizedName = computed( () => this.name().toUpperCase() );

  changeHero(){
    this.name.set( 'Spiderman' );
    this.age.set(22);
  }

  resetForm(){
    this.name.set( 'Ironamn' );
    this.age.set(45);
  }

  changeAge(){
    this.age.set(60);
  }
}
