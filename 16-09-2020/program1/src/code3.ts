import { from } from "rxjs";
import {interval,Subject} from "rxjs"
import {multicast} from "rxjs/operators"
const source=interval(500);
const subject = new Subject();
const multicasted = source.pipe(multicast(subject));
let sub1:any,sub2:any,subConnect:any;
console.log("observerA subscribed")
sub1= multicasted.subscribe({
    next:(v)=>console.log(`observerA:${v}`)
});
setTimeout(()=>{
    console.log("observerA subscribed")
    sub2=multicasted.subscribe({
        next:(v)=>console.log(`observerB:${v}`)
    })
},600)
setTimeout(() => {
    sub1.unsubscribe();
  }, 1200);
   
  setTimeout(() => {
    sub2.unsubscribe();
   
  }, 2000);
  subject.next(1);
  subject.next(2);