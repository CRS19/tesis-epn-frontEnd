import {
  IRegisterFormErrorTexts,
  IRegisterFormValidation,
  IRegisterFormValues,
} from "./../../../utility/form-utils";
import { IRegisterForm } from "./../Interfaces/Forms.interfaces";
import { rolesEnum } from "../Enums/Roles";

export const INITIAL_CREDENTIALS = {
  mail: "",
  password: "",
};

export const INITIAL_NEW_USER = {
  fullName: "",
  idDevice: "",
  isDevice: false,
  isPossibleSick: false,
  isSick: false,
  mail: "",
  password: "",
  rol: rolesEnum.USER,
};

export const INITIAL_REGISTER_FORM_VALIDATION: IRegisterFormValidation = {
  userName: false,
  email: false,
  password: false,
  confirmPassword: false,
};

export const INITIAL_REGISTER_FORM_VALUES: IRegisterFormValues = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const INITIAL_REGISTER_FORM_ERROR_TEXTS: IRegisterFormErrorTexts = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const INITIAL_REGISTER_FORM: IRegisterForm = {
  registerFormValues: INITIAL_REGISTER_FORM_VALUES,
  registerFormValidations: INITIAL_REGISTER_FORM_VALIDATION,
  registerFormErrorTexts: INITIAL_REGISTER_FORM_ERROR_TEXTS,
};
