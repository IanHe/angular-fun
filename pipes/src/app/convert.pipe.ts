import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: number | undefined, targetUnits: string): number  {
    if (!value) return 0
    switch (targetUnits) {
      case 'km':
        return value * 1.60934;
      case 'm':
        return value * 1609.34;
      case 'cm':
        return value * 1609340;
      default:
        throw new Error('target unit not supported')
    }
  }

}
