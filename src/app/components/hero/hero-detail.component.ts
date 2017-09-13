import { Component, Input } from '@angular/core';

import { Hero } from './hero';
@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
      {{hero}}
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
    
      </div>
    </div>
  `
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}
