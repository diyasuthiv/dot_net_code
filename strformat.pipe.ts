import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strformat'
})
export class StrformatPipe implements PipeTransform {

  transform(string_expression : string, seperator:string): unknown {
    var temp=string_expression
    return temp.replace(/ /g,seperator);
  }

}
