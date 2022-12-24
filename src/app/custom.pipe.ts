import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(Name:string,Gender:string,DOB:any): string{
   if(Gender.toLocaleLowerCase()=='male')
   return "Mr. " + Name;
   else
  return "Mrs. " + Name;
   }

}
