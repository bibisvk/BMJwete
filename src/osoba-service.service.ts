import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Osoba} from "./app/models/osoba.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OsobaServiceService {
  private apiUrl = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) { }
  getOsoby(): Observable<Osoba[]> {
    return this.http.get<Osoba[]>(`${this.apiUrl}`);
  }
  getOsoba(osobaId: string): Observable<Osoba> {
    return this.http.get<Osoba>(`${this.apiUrl}/${osobaId}`);
  }
  createOsoba(osoba: Osoba): Observable<Osoba> {
    return this.http.post<Osoba>(`${this.apiUrl}`, {firstName: osoba.meno, lastName: osoba.priezvisko});
  }
}
