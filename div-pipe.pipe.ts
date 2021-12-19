import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'divPipe'
})
export class DivPipePipe implements PipeTransform {

  transform(number_expression: number,num_divisor:number ): unknown {
    return number_expression/num_divisor;
  }

}
