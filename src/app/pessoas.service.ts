import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  result : any;
  constructor(private http: HttpClient) { }

  obterPessoa(){
    let url='http://localhost/api-slim/pessoas';   
     return this.http.get(url).toPromise();  
    }

   
   
    

  
}
