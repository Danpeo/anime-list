import {Component, Input} from '@angular/core';

@Component({
  selector: 'dvar-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title: string = '';
}
