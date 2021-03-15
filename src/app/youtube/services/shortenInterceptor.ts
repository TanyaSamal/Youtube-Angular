import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../../shared/consts';

@Injectable()
export class ShortenInterceptor implements HttpInterceptor {

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const newUrl = {
            url: Constants.INTERCEPT_URL
        };
        req = Object.assign(req, newUrl);

        return next.handle(req);
    }

}
