import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title(title: any) {
  throw new Error('Method not implemented.');
}
titulo:string = 'Contador App';
numero:number =10;
base:number=5;

sumar(valor:number){
  this.numero +=valor;
}
restar(valor:number){
  this.numero +=valor;
}
sumart(valor:number){
  this.numero +=valor;
}
restart(valor:number){
  this.numero +=valor;
}

}
