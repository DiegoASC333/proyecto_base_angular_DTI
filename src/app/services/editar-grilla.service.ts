import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs'; // Importar Observable

// Definir interfaces para las respuestas esperadas
export interface GenericApiResponse<T> {
  status: string;
  message: string;
  data?: T;
  datos_editar_grilla?: string;
  error?: boolean;
}

export interface ColumnMetadata {
  nombre_columna: string;
  campo_sitio: string;
  tipo_dato: string;
}

@Injectable({
  providedIn: 'root',
})
export class EditarGrillaServiceService {
  apiURL: string = environment.apiURL;

  constructor(private http: HttpClient) {}

  consultargrilla(entidad: string): Observable<GenericApiResponse<any[]>> {
    // Ajusta 'any[]' al tipo de dato real de tu grilla
    return this.http.get<GenericApiResponse<any[]>>(`${this.apiURL}/entidad/${entidad}`);
  }

  consultarGrillaConBody(entidad: string, body: any): Observable<GenericApiResponse<any[]>> {
    return this.http.post<GenericApiResponse<any[]>>(`${this.apiURL}/entidad/${entidad}`, body);
  }

  editarGrillaService(
    entidad: string,
    id_entidad: string,
    data: any
  ): Observable<GenericApiResponse<any>> {
    // Ajusta 'any' al tipo de respuesta de la edición
    return this.http.put<GenericApiResponse<any>>(`${this.apiURL}/${entidad}/${id_entidad}`, data);
  }

  consultarCamposEdicion(idEntidad: string): Observable<GenericApiResponse<string[]>> {
    return this.http.get<GenericApiResponse<string[]>>(
      `${this.apiURL}/tables/${idEntidad}/editable-columns`
    );
  }

  obtenerMetadataColumnas(idEntidad: string): Observable<GenericApiResponse<ColumnMetadata[]>> {
    return this.http.get<GenericApiResponse<ColumnMetadata[]>>(
      `${this.apiURL}/tables/${idEntidad}/name-columns`
    );
  }
}
