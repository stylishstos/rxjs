import {of, from, fromEvent, merge} from 'rxjs';
import {flatMap, map, startWith, shareReplay} from 'rxjs/operators';

const usersListView = document.getElementById('users-list-view');
const preloader = document.getElementById('preloader');

const refreshClickStream$ = fromEvent(document.getElementById('button-refresh'), 'click');
const initialRefreshStream$ = of('https://api.github.com/users');
const requestOnRefreshStream$ = refreshClickStream$.pipe(
    map((event) => 'https://api.github.com/users?scince=' + Math.floor(Math.random() * 500)),
);
const responseStream$ = merge(initialRefreshStream$, requestOnRefreshStream$).pipe(
    flatMap((url) => {
        console.log('network request');
        return from(fetch(url).then((response) => response.json()));
    }),
    shareReplay(1),
);

function renderSuggestion(userData, selector) {
    const user = document.getElementById(selector);
    const a = user.querySelector('a');
    const img = user.querySelector('img');

    a.href = userData.html_url;
    a.textContent = userData.login;
    img.src = userData.avatar_url;
}

const dataStream$ = merge(
    refreshClickStream$.pipe(
        map((event) => null),
    ),
    responseStream$,
).pipe(
    startWith(null),
);

const dataStream2$ = merge(
    refreshClickStream$.pipe(
        map((event) => null),
    ),
    responseStream$,
).pipe(
    startWith(null),
);

const dataStream3$ = merge(
    refreshClickStream$.pipe(
        map((event) => null),
    ),
    responseStream$,
).pipe(
    startWith(null),
);
dataStream$
    .subscribe((listUsers) => {
        if (listUsers) {
            preloader.style.display = 'none';
            usersListView.style.display = 'block';

            for (let i = 0; i < 3; i++) {
                renderSuggestion(
                    listUsers[Math.floor(Math.random() * listUsers.length)],
                    `user-${i + 1}`
                );
            }
        } else {
            usersListView.style.display = 'none';
            preloader.style.display = 'block';
        }
    });

// dataStream2$.subscribe(console.log);
// dataStream3$.subscribe(console.log);

// const stream$ = of(1).pipe(
//     map((value) => {
//         console.log('mapping');
//         return value
//     }),
//     shareReplay(1),
// )

stream$.subscribe(console.log);
stream$.subscribe(console.log);
stream$.subscribe(console.log);
