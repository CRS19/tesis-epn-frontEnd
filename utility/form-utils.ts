import { defaultTo } from "lodash";
import {
  accentMarks,
  aphabethLetters,
} from "../src/Shared/Contants/FormConstants";
import { ErrorTextsEnum } from "../src/Shared/Enums/ErrorTexts";

export interface IRegisterFormValidation {
  userName: boolean;
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
}

export interface IRegisterFormValues {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IRegisterFormErrorTexts {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const removeNoAlphabethCaracters = (text: string) => {
  for (let i = 0; i < text.length; i++) {
    if (accentMarks(text, i)) {
    } else if (aphabethLetters(text, i)) {
      text = text.substring(0, i) + text.substring(i + 1);
      i--;
    }
  }
  return text;
};

export const findErrorUserName = (text: string) => {
  if (text === "") return ErrorTextsEnum.EMPTY;
  return "";
};

export const isValidateEmail = (text: string) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(text)) {
    return true;
  }

  return false;
};

export const isValidPassword = (text: string) => {
  if (text.length >= 8) {
    return true;
  }

  return false;
};

export const isPasswordMatch = (confirmPass: string, prevPass: string) => {
  if (confirmPass === prevPass) {
    return true;
  }

  return false;
};

export const isFormValid = (
  formVlidations: IRegisterFormValidation
): boolean => {
  const validations = Object.values(formVlidations).map((item) => !!item);

  const resp = validations.find((el) => el === true);

  return !defaultTo(resp, false);
};
