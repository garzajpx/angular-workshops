import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter';
import { HeroPageComponent } from './pages/hero/hero';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent,
  },
  {
    path: 'hero',
    component: HeroPageComponent
  }
];
