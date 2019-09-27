import { Component } from '@angular/core';
import { PessoasService } from '../pessoas.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  result : any;
  id: any;
  data:any = {};
  constructor(private pessoasService : PessoasService, public http: HttpClient) {}

 

}
