import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'scoreboard'
})
export class ScoreboardPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
