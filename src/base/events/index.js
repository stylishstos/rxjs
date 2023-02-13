import { fromEvent, interval, of, from } from 'rxjs';
import { throttle, filter, buffer, map } from 'rxjs/operators';

const clickStream$ = fromEvent(document.getElementById('button'), 'click');
const doubleClickStream$ = clickStream$.pipe(
    buffer(clickStream$.pipe(
        throttle(() => interval(250)),
    )),
    map((arr) => arr.length),
    filter(len => len >= 2)
);

doubleClickStream$.subscribe(() => {
    console.log('click');
});

const streamA$ = from([3,4]);
const streamB$ = streamA$.pipe(map((value) => 10 * value));

streamB$.subscribe((result) => console.log(result));

