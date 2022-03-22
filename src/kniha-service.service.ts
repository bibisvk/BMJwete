import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Kniha, KnihaZoznam} from "./app/models/kniha.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class KnihaServiceService {
  private apiUrl = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) { }

  getKnihy(): Observable<KnihaZoznam[]> {
    return this.http.get<KnihaZoznam[]>(`${this.apiUrl}`);
  }
  getOsoba(knihaId: string): Observable<Kniha> {
    return this.http.get<Kniha>(`${this.apiUrl}/${knihaId}`);
  }
  createKniha(kniha: Kniha): Observable<Kniha> {
    return this.http.post<Kniha>(`${this.apiUrl}`, {id: kniha.k_id, nazov: kniha.nazov, autor: kniha.autor, pocet: kniha.pocet});
  }
}
