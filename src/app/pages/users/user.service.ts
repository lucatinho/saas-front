import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Usuario } from '../../shared/models/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);

  listarUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${environment.urlBase}/usuarios`);
  }

  addUser(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${environment.urlBase}/usuarios`, usuario);
  }

  editUser(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${environment.urlBase}/usuarios`, usuario);
  }
}
