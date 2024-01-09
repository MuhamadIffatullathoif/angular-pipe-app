import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

  transform(value: boolean): 'Flying' | 'No Flying' {
    return value ? 'Flying' : 'No Flying';
  }

}
