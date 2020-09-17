import { of } from 'rxjs';
import { distinct } from 'rxjs/operators';
 
interface Person {
   age: number,
   name: string
}
 
of<Person>(
    { age: 4, name: 'sourav'},
    { age: 7, name: 'bapan'},
    { age: 5, name: 'sourav'},
  ).pipe(
    distinct((p: Person) => p.name),
  )
  .subscribe(x => console.log(x));