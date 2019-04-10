import {Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'multiplier'})
export class MultiplierPipe implements PipeTransform {
  transform(value: number, multiplyBy: string) {
   let multiplier = parseInt(multiplyBy);
   return value * multiplier;
  }

}
