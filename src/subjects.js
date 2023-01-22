import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

document.addEventListener('click', () => {
    const stream$ = new ReplaySubject();
    stream$.subscribe(v => console.log('Value: ', v));

    stream$.next('Hello');
});