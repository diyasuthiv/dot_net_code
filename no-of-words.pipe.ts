import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noOfWords'
})
export class NoOfWordsPipe implements PipeTransform {

  transform(sentence: String): unknown {
    sentence=sentence+" ";

    let word=" ";
    let count=0;
    
    for(let i=0;i<sentence.length;i++)
    {
      if(sentence.charAt(i)!=" ")
      {
        word=word+sentence.charAt(i);
      }
      else
      {
        console.log(word);
        count++;
        word=" ";
      }

    }
    return count;
  }

}
