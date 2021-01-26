import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ISearchResponse } from '../models/search-response.model';
import { Constants } from '../../shared/consts';

@Injectable()
export class ItemsService {

    constructor(private http: HttpClient) {}

    public getResponse(): Observable<ISearchResponse> {
       return this.http.get<ISearchResponse>(Constants.RESPONCE_URL);
    }
}
