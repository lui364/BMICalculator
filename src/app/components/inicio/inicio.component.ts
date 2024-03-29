import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
    
  peso = 60;
  edad = 25;
  altura = 170;
  sexo = 'Masculino';

  constructor(private router: Router){}

  cambiarAltura(event:any){
    this.altura = event.target.value;
  }

  masculino(){
    this.sexo = 'Masculino';
  }
  femenino(){
    this.sexo = 'Femenino';
  }
  calcularBMI(){
    const BMI = this.peso / Math.pow(this.altura/100, 2);
    this.router.navigate(['/resultado',BMI.toFixed(1)]);
  }
}
