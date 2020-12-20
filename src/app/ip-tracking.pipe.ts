import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ipTracking'
})
export class IpTrackingPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
