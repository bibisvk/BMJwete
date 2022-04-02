import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vypozicka, VypozickaZoznam} from "./app/models/vypozicka.model";

@Injectable({
  providedIn: 'root'
})
export class VypozickaService {
  private apiUrl = 'http://localhost:8080/api/borrowings';
  //private apiUrl = 'http://labs.fpv.umb.sk:8080/api/borrowings';

  constructor(private http: HttpClient) { }


  getVypozicky(): Observable<VypozickaZoznam[]> {
    return this.http.get<VypozickaZoznam[]>(`${this.apiUrl}`);
  }

  getVypozicka(vypozickaId: number): Observable<Vypozicka> {
    return this.http.get<Vypozicka>(`${this.apiUrl}/${vypozickaId}`);
  }

  createVypozicka(vypozicka: Vypozicka): Observable<Vypozicka> {
    return this.http.post<Vypozicka>(`${this.apiUrl}`, {borrowingId: vypozicka.id, bookId: vypozicka.kniha, customerId: vypozicka.pouzivatel});
  }

  updateVypozicka(vypozickaId: number, vypozicka: Vypozicka): Observable<Vypozicka> {
    return this.http.put<Vypozicka>(`${this.apiUrl}/${vypozickaId}`, {borrowingId: vypozicka.id, bookId: vypozicka.kniha, customerId: vypozicka.pouzivatel});
  }

  deleteVypozicka(vypozickaId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${vypozickaId}`);
  }
}
