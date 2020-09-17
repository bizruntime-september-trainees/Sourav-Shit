import { of, partition } from 'rxjs';
 
const observableValues = of(1, 2, 3, 4, 5, 6);
const [evens$, odds$] = partition(observableValues, (value, index) => value % 2 === 0);
 
odds$.subscribe(x => console.log('odds', x));
evens$.subscribe(x => console.log('evens', x));