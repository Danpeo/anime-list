import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'dvar-container',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {
  @Input({required: false}) cssStyles: string = '';

}
