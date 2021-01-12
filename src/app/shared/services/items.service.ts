import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ISearchResponse } from '../models/search-response.model';

@Injectable()
export class ItemsService {

    private responseUrl: string = 'assets/response.json';

    constructor(private http: HttpClient) {}

    public getResponse(): Observable<ISearchResponse> {
       return this.http.get<ISearchResponse>(this.responseUrl);
    }
}
