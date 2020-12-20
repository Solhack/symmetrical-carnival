import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ranking'
})
export class RankingPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
