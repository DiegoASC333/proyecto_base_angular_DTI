import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ExampleService {
  apiURL: String = environment.apiURL;

  constructor(private httpClient: HttpClient) {}

  getTable() {
    return this.httpClient.get(`${this.apiURL}/transparencia1`);
  }

  getRolesVigentes() {
    return this.httpClient.get(`${this.apiURL}/getrolesvigentes`);
  }

  getRolIdByDescripcion(descripcion: string) {
    //return this.httpClient.get(`${this.apiURL}/getrolidbydescripcion/${descripcion}`);
    return this.httpClient.get<{ id_rol: number }>(
      `${this.apiURL}/getrolidbydescripcion/${descripcion}`
    );
  }

  getUsuarios() {
    return this.httpClient.get(`${this.apiURL}/getusuarios`);
  }

  createUsuario(data: any): any {
    return this.httpClient.post(`${this.apiURL}/createusuario`, data);
  }

  updateUsuario(id: number, data: any): any {
    return this.httpClient.put(`${this.apiURL}/updateusuario/${id}`, data);
  }

  getFuncionario(rut: string): any {
    return this.httpClient.get(`${this.apiURL}/funcionario/${rut}`);
  }
}
