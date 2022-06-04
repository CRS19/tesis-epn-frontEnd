import {
  IRegisterFormErrorTexts,
  IRegisterFormValidation,
} from "./../../../utility/form-utils";
import { IRegisterFormValues } from "../../../utility/form-utils";

export interface IRegisterForm {
  registerFormValues: IRegisterFormValues;
  registerFormValidations: IRegisterFormValidation;
  registerFormErrorTexts: IRegisterFormErrorTexts;
}
