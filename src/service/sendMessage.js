import { catchError, from, of, switchMap, tap } from "rxjs";
import { createPayload, options, url } from "./util";

export const sendMessage$ = (userInput) => {
    const payload = createPayload(userInput);

    return from(
        fetch(url, options(payload))
    ).pipe(
        switchMap(async res =>{
            const data = await res.json();
            return data.choices?.[0]?.message?.content || 'No response';
        }),
        tap(data=> {
            console.log(data)
        }),
        catchError((err) => {
            console.error('Error fetching response', err);
            return of('Error!!');
        })
    )
}