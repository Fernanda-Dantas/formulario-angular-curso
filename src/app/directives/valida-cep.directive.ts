import { ConsultaCepService } from './../service/consulta-cep.service';
import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';

@Directive({
  selector: '[validadorCEP]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: ValidaCepDirective,
    multi: true
  }]
})
export class ValidaCepDirective implements AsyncValidator {


  constructor(private ConsultaCepService: ConsultaCepService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const cep = control.value;

    return this.ConsultaCepService.getConsultaCEP(cep).pipe(map(
      (resultado: any) => resultado.erro ? {'validadorCEP' : true} : null
    ))
      
  }

}
