import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CollectionsService {
  constructor(private http: HttpClient) {}

  getCollectionByDate(date: string): Observable<any> {
    const url = `${environment.apiUrl}/report/collection/${date}`;
    return this.http.get<any>(url);
  }
}
