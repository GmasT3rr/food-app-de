import { Component, Input } from '@angular/core';
import { Serving } from '../../../../interfaces/serving.interface';
import { CommonModule } from '@angular/common';
import { DisplayIfAvailablePipe } from '../../pipes/fodd-info-available.pipe';

@Component({
  selector: 'app-nutri-info',
  standalone: true,
  imports: [DisplayIfAvailablePipe],
  templateUrl: './nutri-info.component.html',
  styleUrl: './nutri-info.component.scss'
})
export class NutriInfoComponent {
  @Input() serving?:Serving
}
