import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICepResponse } from '../../shared/interfaces/ICepResponse.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  private http = inject(HttpClient);

  pegarCep(cep: string): Observable<ICepResponse> {
    return this.http.get<ICepResponse>(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
