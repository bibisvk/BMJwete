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

  getKniha(knihaId: number): Observable<Kniha> {
    return this.http.get<Kniha>(`${this.apiUrl}/${knihaId}`);
  }

  createKniha(kniha: Kniha): Observable<Kniha> {
    return this.http.post<Kniha>(`${this.apiUrl}`, {nazov: kniha.nazov, autor: kniha.autor, pocet: kniha.pocet});
  }

  updateKniha(knihaId: number, kniha: Kniha): Observable<Kniha> {
    return this.http.put<Kniha>(`${this.apiUrl}/${knihaId}`, {nazov: kniha.nazov, autor: kniha.autor, pocet: kniha.pocet});
  }

  deleteKniha(knihaId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${knihaId}`);
  }
}
