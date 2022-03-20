import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vypozicka} from "./app/models/vypozicka.model";

@Injectable({
  providedIn: 'root'
})
export class VypozickaService {
  private apiUrl = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) { }
  getVypozicky(): Observable<Vypozicka[]> {
    return this.http.get<Vypozicka[]>(`${this.apiUrl}`);
  }
  getVypozicka(vypozickaId: string): Observable<Vypozicka> {
    return this.http.get<Vypozicka>(`${this.apiUrl}/${vypozickaId}`);
  }
  createVypozicka(vypozicka: Vypozicka): Observable<Vypozicka> {
    return this.http.post<Vypozicka>(`${this.apiUrl}`, {v_id: vypozicka.v_id, kniha: vypozicka.kniha, pouzivatel: vypozicka.pouzivatel});
  }
}
