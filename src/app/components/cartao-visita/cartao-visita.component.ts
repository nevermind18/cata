import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartao-visita',
  templateUrl: './cartao-visita.component.html',
  styleUrls: ['./cartao-visita.component.css'],
})
export class CartaoVisitaComponent implements OnInit {
  cartao: any;

  cartaoVisita = this.fb.group({
    nome: [''],
    idade: [''],
    email: [''],
    telefone: [''],
    endereco: [''],
    numero: [''],
    bairro: [''],
    cidade: [''],
  });

  ngOnInit(): void {}

  constructor(private fb: FormBuilder, private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.cartao = nav?.extras.state;
    if (this.cartao.nome != "") {
      this.cartaoVisita.setValue(this.cartao);
    }
  }

  voltar() {
    this.router.navigateByUrl('/formulario2', { state: this.cartao });
  }
}
