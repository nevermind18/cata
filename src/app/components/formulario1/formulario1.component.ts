import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { cartaoVisita } from 'src/app/shared/cortaovisita/cartaoVisita.model';

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css'],
})
export class Formulario1Component implements OnInit {
  private cartao = new cartaoVisita();
  nomeErro: String = 'Nome deve ter no minimo 3 no maximo 80 e apenas letras e espaço';
  idadeErro: String = 'Idade deve ser maior que 0 e menor que 130';
  emailErro: String = 'Email deve ser valido';
  telefoneErro: String = 'Telefone deve ser entre 8 ou 9 digitos e apenas numeros';

  cartaoVisita = this.fb.group({
    nome: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(80),
        Validators.pattern('[A-zs]+$'),
      ],
    ],
    idade: [
      '',
      [
        Validators.required,
        Validators.min(0),
        Validators.max(130),
        Validators.pattern('[0-9]+$'),
      ],
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ],
    ],
    telefone: [
      '',
      [
        Validators.required,
        Validators.maxLength(15),
        Validators.pattern('[0-9]{8,9}$'),
      ],
    ],
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  validar(): boolean {
    if (
      this.cartaoVisita.get('nome')?.touched &&
      this.cartaoVisita.get('nome')?.valid &&
      this.cartaoVisita.get('idade')?.touched &&
      this.cartaoVisita.get('idade')?.valid &&
      this.cartaoVisita.get('email')?.touched &&
      this.cartaoVisita.get('email')?.valid &&
      this.cartaoVisita.get('telefone')?.valid &&
      this.cartaoVisita.get('telefone')?.touched
    ) {
      return false;
    }
    return true;
  }

  avancar() {
    console.log(this.cartaoVisita);
    this.cartao.nome = this.cartaoVisita.value.nome || '';
    this.cartao.email = this.cartaoVisita.value.email || '';
    this.cartao.telefone = parseInt(this.cartaoVisita.value.telefone || '0');
    this.cartao.idade = parseInt(this.cartaoVisita.value.idade || '0');
    this.router.navigateByUrl(`/formulario2`, { state: this.cartao });
  }
}
