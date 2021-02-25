import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class shortenInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req);
        
        const newUrl = {url: 'https://www.googleapis.com/youtube/search'};
        req = Object.assign(req, newUrl);

        console.log(req);
        return next.handle(req);
    }

}