import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CargaArchivosServiceTsService {
  apiURL: string = environment.apiURL;

  constructor(private http: HttpClient) {}

  // Get active subjects
  getMateriasVigentes(): Observable<any> {
    return this.http.get(`${this.apiURL}/materias-vigentes`);
  }

  getCategoriasVigentesbyMateria(idMateria: number): Observable<any> {
    return this.http.get(`${this.apiURL}/categorias-vigentes?id=${idMateria}`);
  }

  getSubcategoriasVigentesbyCategoria(idCategoria: number): Observable<any> {
    return this.http.get(`${this.apiURL}/subcategorias-vigentes?id=${idCategoria}`);
  }

  validarDocumentoExistente(data: any): Observable<any> {
    return this.http.post(`${this.apiURL}/validaexistedocumento`, data);
  }

  obtenerEntidad(data: any): Observable<any> {
    return this.http.post(`${this.apiURL}/obtener-entidad`, data);
  }

  subirExcelvalidado(entidad: string, formData: FormData): Observable<any> {
    return this.http.post(`${this.apiURL}/${entidad}/validar-excel-crea-doc`, formData);
  }

  /**
   * Validates if a "no-load notification" or file already exists for the given parameters.
   *
   * @param data An object containing mat_id, cat_id, sub_id, doc_ano, and doc_mes.
   * `cat_id`, `sub_id`, `doc_ano`, and `doc_mes` can be `null` or `0` if not applicable.
   * @returns An Observable with the API response.
   */
  validarExisteNotificacion(data: {
    mat_id: number;
    cat_id: number | null;
    sub_id: number | null;
    doc_ano: number | null;
    doc_mes: number | null;
  }): Observable<any> {
    return this.http.post(`${this.apiURL}/validar-existe-notificacion`, data);
  }

  /**
   * Creates a "No Carga" notification in the system.
   * This should only be called after validating that no existing entry exists.
   *
   * @param data An object containing mat_id, cat_id, sub_id, doc_ano, and doc_mes.
   * @returns An Observable with the API response, typically confirming creation.
   */
  notificarNoCarga(data: {
    mat_id: number;
    cat_id: number | null;
    sub_id: number | null;
    doc_ano: number | null;
    doc_mes: number | null;
  }): Observable<any> {
    return this.http.post(`${this.apiURL}/notificar-no-carga`, data);
  }
}
