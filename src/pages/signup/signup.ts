import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup : FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

      this.formGroup = this.formBuilder.group({
        nome: ['Leo Candido',[Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
        email: ['leocs@algartelecom.com.br', [Validators.required, Validators.email]],
        tipo: ['1', [Validators.required]],
        cpfOuCnpj: ['82843503604', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
        senha: ['123', [Validators.required]],
        logradouro: ['Rua Parana', [Validators.required]],
        numero: ['1938', [Validators.required]],
        complemento: ['', []],
        bairro: ['Marta Helena', []],
        cep: ['38402233',[]],
        telefone1: ['34991778546', [Validators.required]],
        telefone2: ['', []],
        telefone3: ['', []],
        estadoId: [null, [Validators.required]],
        cidadeId: [null, [Validators.required]]
      });
  }

  signupUser() {
    console.log('Passou por aqui');
  }
}
