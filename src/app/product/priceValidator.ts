import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";



@Directive({
    selector: '[PriceValidator]',
    providers: [{provide: NG_VALIDATORS, useExisting: PriceValidatorDirective, multi:true}]
})

export class PriceValidatorDirective implements Validator {
    
    validate(control: AbstractControl): ValidationErrors | null {
        let result = control.value < 0
        return result ? {invalidPrice: true} : null;
    } 
}


