import { Injectable } from '@angular/core';
import { Consulta } from '../Clases/Consulta';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  consultaCliente: Consulta = new Consulta()
  constructor(private http: HttpClient) { }

  leerUsuarioDni(dni:String):Observable<Consulta>{
    return this.http.get<Consulta>("https://dniruc.apisperu.com/api/v1/dni/"+dni+"?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Impvc2VjdXNpc3lzdGVtQGdtYWlsLmNvbSJ9.cpVt_iviGDeULLHKkTukzDBl-NRmB0ae7sNeANj6_6Q");
  }
}
