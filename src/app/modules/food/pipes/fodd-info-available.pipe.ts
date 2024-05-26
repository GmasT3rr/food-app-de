import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayIfAvailable',
  standalone:true
})
export class DisplayIfAvailablePipe implements PipeTransform {
  transform(value: any, unit: string): string {
    return value != null ? `${value}${unit}` : 'Not available';
  }
}
