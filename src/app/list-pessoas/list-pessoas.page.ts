import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../pessoas.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pessoas',
  templateUrl: './list-pessoas.page.html',
  styleUrls: ['./list-pessoas.page.scss'],
})
export class ListPessoasPage implements OnInit {
  data:any = {};
  constructor(private pessoasService : PessoasService, public http: HttpClient, public router: Router) { }

  ngOnInit() {
    this.get();
  }
  result : any;
  pessoas:any;
  get(){
      //chama a tela de aguarde
      this.pessoasService.obterPessoa()
      .then((response)=>{
        this.result = JSON.stringify(response);
        this.result= response;
        //fecha tela de aguarde
      })
      .catch((response)=>{
        this.result = JSON.stringify(response);
        //fecha tela de aguarde
      });
  }

  postdelete(id:number) {
    var link = 'http://localhost/api-slim/pessoal_delete.php';
    var myData = JSON.stringify({
      id: id,     });
    
    this.http.post(link, myData)
    .subscribe(data => {
    this.data.response = data["_body"];    
     console.log("Deu boa!");
     this.router.navigateByUrl('/home');
    }, error => {
    console.log("Oooops!");
    });
    }     

    

   

 
  
}

