import { FormGroup } from '@angular/forms';

export class MyFormGroup extends FormGroup {
  checkError(propName: string, errorType: string): boolean {
    return (
      this.get(propName)?.invalid! &&
      this.get(propName)?.touched! &&
      this.get(propName)?.dirty! &&
      this.get(propName)?.hasError(errorType)!
    );
  }

  checkIsRequired(propName: string): boolean {
    let isErrorRequiredExist = this.checkError(propName, 'required');
    return isErrorRequiredExist;
  }

  checkIsMinLength(propName: string): boolean {
    return this.checkError(propName, 'minlength');
  }

  checkIsMaxLength(propName: string): boolean {
    return this.checkError(propName, 'maxlength');
  }

  checkIsValidPattern(propName: string): boolean {
    return this.checkError(propName, 'pattern');
  }

  checkIsMin(propName: string): boolean {
    return this.checkError(propName, 'min');
  }
}
