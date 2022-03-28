import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vypozicka} from "./app/models/vypozicka.model";

@Injectable({
  providedIn: 'root'
})
export class VypozickaService {
  private apiUrl = 'http://localhost:8080/api/borrowings';

  constructor(private http: HttpClient) { }
  getVypozicky(): Observable<Vypozicka[]> {
    return this.http.get<Vypozicka[]>(`${this.apiUrl}`);
  }
  getVypozicka(vypozickaId: string): Observable<Vypozicka> {
    return this.http.get<Vypozicka>(`${this.apiUrl}/${vypozickaId}`);
  }
  createVypozicka(vypozicka: Vypozicka): Observable<Vypozicka> {
    return this.http.post<Vypozicka>(`${this.apiUrl}`, {bookId: vypozicka.kniha, customerId: vypozicka.pouzivatel});
  }

  deleteVypozicka(vypozickaId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${vypozickaId}`);
  }
}
