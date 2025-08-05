import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class RolPerfilServicioService {
  apiURL: string = environment.apiURL;

  constructor(private http: HttpClient) {}

  //obtener roles vigentes
  getRoles() {
    return this.http.get(`${this.apiURL}/getrolesvigentes`);
  }

  //obtener id en base a nombre del rol
  getIdRol(nombreRol: string) {
    return this.http.get(`${this.apiURL}/getrolidbydescripcion/${nombreRol}`);
  }

  //obtener accesos vigentes
  getAccesos(): Observable<any> {
    return this.http.get(`${this.apiURL}/getaccesosvigentes`);
  }

  //obtener los permisos en base a un rol
  getPermisosByRol(idRol: number): Observable<any> {
    return this.http.get(`${this.apiURL}/getpermisosbyrol/${idRol}`);
  }

  //guardar los permisos asignados a un rol mediante post
  guardarPermisos(permisos: any): Observable<any> {
    return this.http.post(`${this.apiURL}/createpermisosbyrol`, permisos);
    return permisos;
  }
}
