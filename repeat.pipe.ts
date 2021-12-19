import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repeat'
})
export class RepeatPipe implements PipeTransform {

  transform(string_expression: string,frequency:number): unknown {
    let output=" ";
    for(let i=1;i<=frequency;i++)
    {
      output=output+" "+string_expression;
    }
    return output;
  }

}
