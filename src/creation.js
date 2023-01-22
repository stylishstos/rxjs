import { of, from, Observable, fromEvent, range, timer, interval } from 'rxjs';
import { scan, map } from 'rxjs/operators';

// const stream$ = of(1, 2, 3, 4);

// stream$.subscribe(val => {
//     console.log('Value:', val);
// });

// const arr$ = from([11, 12, 13, 14])
// .pipe(
//     scan((acc, v) => {
//         acc.push(v);

//         return acc;
//     }, [])
// );

// arr$.subscribe(val => console.log(val);

// const stream$ = new Observable(observer => {
//     observer.next('First value');
//     // observer.error('Error');
//     // observer.complete();
//     observer.next('Second value');

// });

// // stream$.subscribe((val) => console.log('Val:', val));

// stream$.subscribe({
//     next: val => console.log(val),
//     error: error => console.error(error),
//     complete: () => console.log('Complete')
// });

// const canvas = document.querySelector('canvas');

// fromEvent(canvas, 'mousemove')
//     .pipe(
//         map(e => ({
//             x: e.offsetX,
//             y: e.offsetY,
//             ctx: e.target.getContext('2d')
//         }))
//     )
//     .subscribe(
//         pos => pos.ctx.fillRect(pos.x, pos.y, 2, 2)
//     );

// const clear$ = fromEvent(document.getElementById('clear'), 'click');

// clear$.subscribe(() => {
//     canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
// });

// const sub = interval(500).subscribe(v => console.log(v));

// setTimeout(() => {
//     sub.unsubscribe();
// }, 4000);

// timer(2500).subscribe(val => console.log(v));

// range(42, 10).subscribe(v => console.log(v));