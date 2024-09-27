import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { ConsultaCepService } from '../service/consulta-cep.service';

@Directive({
  selector: '[maiorIdadeValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MaiorIdadeDirective,
    multi: true
  }]
})
export class MaiorIdadeDirective implements Validator {

  constructor(private ConsultaCepService: ConsultaCepService) { }

  validate(control: AbstractControl): ValidationErrors | null {
    const dataNascimento = control.value;
    const anoNascimento = new Date(dataNascimento).getFullYear();
    const ateDezoito = anoNascimento + 18;
    const anoAtual = new Date().getFullYear();
    const ehMaior = ateDezoito <= anoAtual;
    return ehMaior ? null : {'maiorIdadeValidator': true};
  }


}
