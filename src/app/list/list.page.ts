import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  data:any = {};
  constructor(public http: HttpClient, public router: Router) {
    this.data.nome = '';
    this.data.email = '';
    this.data.response = '';
    
    this.http = http;
  }

  ngOnInit() {
  }
  
  submit() {
    var link = 'http://localhost/api-slim/pessoas/';
    var myData = JSON.stringify({nome: this.data.nome, email: this.data.email});
    
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
