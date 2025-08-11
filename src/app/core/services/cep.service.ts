import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICepResponse } from '../../shared/interfaces/ICepResponse.interface';
import { Observable } from 'rxjs';
import {Estado, Municipio} from '../../shared/models/Endereco.model';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  private http = inject(HttpClient);

  pegarCep(cep: string): Observable<ICepResponse> {
    return this.http.get<ICepResponse>(`https://viacep.com.br/ws/${cep}/json/`);
  }

  listarEstados(): Observable<Estado[]> {
    return this.http.get<Estado[]>(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`,
    );
  }

  listarMunicipios(sigla: string): Observable<Municipio[]> {
    return this.http.get<Municipio[]>(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${sigla}/municipios`,
    );
  }
}
