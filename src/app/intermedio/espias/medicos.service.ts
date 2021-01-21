import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class MedicosService {

  constructor( public http: HttpClient ) { }

  getMedicos() {
    return this.http.get('...');
  }

  agregarMedico( medico: any ) {
    return this.http.post('...', medico );
  }

  borrarMedico( id: string ) {
    return this.http.delete('...' );
  }


}
