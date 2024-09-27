import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {
  url_API = 'http://viacep.com.br/ws/';

  constructor(private http: HttpClient) { }

  getConsultaCEP(cep: string) {
    return this.http.get(`${this.url_API}${cep}/json`)
  }
}
