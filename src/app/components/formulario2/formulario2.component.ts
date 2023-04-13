import { cartaoVisita } from 'src/app/shared/cortaovisita/cartaoVisita.model';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css'],
})
export class Formulario2Component implements OnInit {
  enderecoErro: String = 'Endereco deve ter mais de 8 e menos de 80 caracteres';
  numeroErro: String = 'Numero deve ter entre 1 e 999';
  bairroErro: String = 'bairro deve ter mais de 8 e menos de 80 caracteres';
  cidadeErro: String = 'cidade deve ter mais de 8 e menos de 80 caracteres';
  cartao: any;
  cartaoVisita = this.fb.group({
    endereco: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(80)],
    ],
    numero: [
      '',
      [
        Validators.required,
        Validators.min(0),
        Validators.max(130),
        Validators.pattern('[0-9]'),
      ],
    ],
    bairro: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(80)],
    ],
    cidade: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(80)],
    ],
  });

  ngOnInit(): void {}

  constructor(private fb: FormBuilder, private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.cartao = nav?.extras.state;
  }

  validar(): boolean {
    if (
      this.cartaoVisita.get('endereco')?.touched &&
      this.cartaoVisita.get('endereco')?.valid &&
      this.cartaoVisita.get('numero')?.touched &&
      this.cartaoVisita.get('numero')?.valid &&
      this.cartaoVisita.get('bairro')?.touched &&
      this.cartaoVisita.get('bairro')?.valid &&
      this.cartaoVisita.get('cidade')?.valid &&
      this.cartaoVisita.get('cidade')?.touched
    ) {
      return false;
    }
    return true;
  }

  carregarObjeto() {
    this.cartao.endereco = this.cartaoVisita.value.endereco || '';
    this.cartao.numero = parseInt(this.cartaoVisita.value.numero || '0');
    this.cartao.bairro = this.cartaoVisita.value.bairro || '';
    this.cartao.cidade = this.cartaoVisita.value.cidade || '';
  }

  avancar() {
    this.carregarObjeto();
    this.router.navigateByUrl('/cartaovisita', { state: this.cartao });
  }

  voltar() {
    this.carregarObjeto();
    this.router.navigateByUrl('/', { state: this.cartao });
  }
}
