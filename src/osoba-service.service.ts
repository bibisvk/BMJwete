import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Osoba, OsobaZoznam} from "./app/models/osoba.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OsobaServiceService {
  private apiUrl = 'http://localhost:8080/api/customers';
  //private apiUrl = 'http://labs.fpv.umb.sk:8080/api/customers';

  constructor(private http: HttpClient) { }

  getOsoby(): Observable<OsobaZoznam[]> {
    return this.http.get<OsobaZoznam[]>(`${this.apiUrl}`);
  }

  getOsoba(osobaId: number): Observable<Osoba> {
    return this.http.get<Osoba>(`${this.apiUrl}/${osobaId}`);
  }

  createOsoba(osoba: Osoba): Observable<Osoba> {
    return this.http.post<Osoba>(`${this.apiUrl}`, {firstName: osoba.meno, lastName: osoba.priezvisko});
  }

  updateOsoba(osobaId: number, osoba: Osoba): Observable<Osoba> {
    return this.http.put<Osoba>(`${this.apiUrl}/${osobaId}`, {firstName: osoba.meno, lastName: osoba.priezvisko});
  }

  deleteOsoba(osobaId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${osobaId}`);
  }
  /*
  nahrajSubor(subor: File): Observable<Object>{
    const formData: FormData = new FormData();
    formData.append("subor",subor);

  }
  
   */
}
