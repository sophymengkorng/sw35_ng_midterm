import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toKhr',
})
export class ToKhrPipe implements PipeTransform {
  transform(amount: number): string {
    let Total:number = amount * 4100;
    let result: number = Math.round(Total/100) * 100;
    return result.toLocaleString();
  }
}
