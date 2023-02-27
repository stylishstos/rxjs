import {of, Observable} from 'rxjs';
import {
    tap,
    map, filter,
} from 'rxjs/operators';

const fooStream$ = of(1,2,3,4,5);

// function multiplyByTen(source, multiplier) {
//     let result = new Observable(function subscribe(observer) {
//         source.subscribe({
//             next: (x) => observer.next(x * multiplier),
//             error: (err) => observer.error(err),
//             complete: () => observer.complete()
//         })
//     });
//
//     return result;
// }
//
// const barStream$ = multiplyByTen(fooStream$, 2);

const barStream$ = fooStream$.pipe(
    tap((x) => console.log('before: ', x)),
    map(x => x * 2),
    tap((x) => console.log('after map: ', x)),
    filter(x => x > 3),
    tap((x) => console.log('after filter: ', x)),
);


barStream$.subscribe({
    next: (x) => console.log('next: ', x),
    error: (err) => console.log('err: ', err),
    complete: () => console.log('complete'),
});
