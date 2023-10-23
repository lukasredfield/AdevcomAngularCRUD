import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EscritosModel } from '../model/escritos-model';

@Injectable({
  providedIn: 'root'
})
export class EscritosService {

  constructor(private httpClient: HttpClient) { }

  getAllEscrito(): Observable<EscritosModel[]> {
    return this.httpClient.get<EscritosModel[]>('http://localhost:8080/adevcom/getAll');
  }
  

  getEscrito(id: number): Observable<EscritosModel> {
    return this.httpClient.get<EscritosModel>('http://localhost:8080/adevcom/' + id);
  }

  saveEscrito(request: any): Observable<any> {
    return this.httpClient.post('http://localhost:8080/adevcom/new', request);
  }

  updateEscrito(request: any): Observable<any> {
    return this.httpClient.put('http://localhost:8080/adevcom/update', request);
  }

  deleteEscrito(id: number): Observable<any> {
    return this.httpClient.delete('http://localhost:8080/adevcom/delete/' + id);
  }
}
