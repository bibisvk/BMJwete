import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vypozicka, VypozickaZoznam} from "./app/models/vypozicka.model";

@Injectable({
  providedIn: 'root'
})
export class VypozickaService {
  private apiUrl = 'http://localhost:8080/api/borrowings';

  constructor(private http: HttpClient) { }


  getVypozicky(): Observable<VypozickaZoznam[]> {
    return this.http.get<VypozickaZoznam[]>(`${this.apiUrl}`);
  }

  getVypozicka(vypozickaId: number): Observable<Vypozicka> {
    return this.http.get<Vypozicka>(`${this.apiUrl}/${vypozickaId}`);
  }

  createVypozicka(vypozicka: Vypozicka): Observable<Vypozicka> {
    return this.http.post<Vypozicka>(`${this.apiUrl}`, {v_id: vypozicka.v_id, kniha: vypozicka.kniha, pouzivatel: vypozicka.pouzivatel});
  }

  updateVypozicka(vypozickaId: number, vypozicka: Vypozicka): Observable<Vypozicka> {
    return this.http.put<Vypozicka>(`${this.apiUrl}/${vypozickaId}`, {v_id: vypozicka.v_id, kniha: vypozicka.kniha, pouzivatel: vypozicka.pouzivatel});
  }

  deleteVypozicka(vypozickaId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${vypozickaId}`);
  }
}
