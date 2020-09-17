import {Subject} from "rxjs"
import {from} from "rxjs"
const subject =new Subject<number>();
subject.subscribe({
    next:(v)=>console.log(`observerA: ${v}`)
});
subject.subscribe({
    next:(v)=>console.log(`observerB: ${v}`)
});
//subject.next(1);
//subject.next(2);
const observable = from([1, 2, 3]);
observable.subscribe(subject);