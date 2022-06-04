import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  findErrorUserName,
  removeNoAlphabethCaracters,
  isValidateEmail,
  isValidPassword,
  isPasswordMatch,
  isFormValid,
} from "../../../../utility/form-utils";
import { useAppDispatch, useAppSelector } from "../../../Hooks/useAppHooks";
import {
  INITIAL_CREDENTIALS,
  INITIAL_REGISTER_FORM,
} from "../../../Shared/Contants/EmptyEntities";
import { ErrorTextsEnum } from "../../../Shared/Enums/ErrorTexts";
import { RoutesEnum } from "../../../Shared/Enums/Routes";
import { IRegisterForm } from "../../../Shared/Interfaces/Forms.interfaces";
import { ILoginRequest } from "../../../Shared/Interfaces/LoginRequest.interfaces";
import {
  checkAuthToken,
  createNewUser,
  getAuthToken,
} from "../../../store/actionCreators/actionCreators";
import { setSnackBarMessage } from "../../../store/reducer/reducer";
import { IUseLogin } from "./useLogin.interfaces";

export const useLogin = (): IUseLogin => {
  const dispatch = useAppDispatch();
  const route = useRouter();
  const { isLoggedIn = false, isLoading = false } = useAppSelector(
    (store) => store.generalReducer!
  );
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [credentials, setCredentials] =
    useState<ILoginRequest>(INITIAL_CREDENTIALS);

  const [newUserForm, setNewUserForm] = useState<IRegisterForm>(
    INITIAL_REGISTER_FORM
  );

  const navigateToHome = () => {
    route.push(RoutesEnum.HOME);
  };

  const setPassword = (text: string) =>
    setCredentials((prevVal) => ({ ...prevVal, password: text }));

  const setEmail = (text: string) =>
    setCredentials((prevVal) => ({
      ...prevVal,
      mail: text.toLowerCase().trim(),
    }));

  const changeLoginFormToRegister = () => setIsRegister(true);
  const changeRegisterFormToLogin = () => setIsRegister(false);

  const setFullName = (text: string) => {
    setNewUserForm((prevVal: IRegisterForm) => {
      const userName = removeNoAlphabethCaracters(text);
      const errorText = findErrorUserName(userName);

      return {
        registerFormValidations: {
          ...prevVal.registerFormValidations,
          userName: userName === "",
        },
        registerFormValues: {
          ...prevVal.registerFormValues,
          userName,
        },
        registerFormErrorTexts: {
          ...prevVal.registerFormErrorTexts,
          userName: errorText,
        },
      };
    });
  };

  const setNewEmail = (text: string) => {
    setNewUserForm((prevVal: IRegisterForm) => {
      const newEmail = !isValidateEmail(text);

      return {
        registerFormValidations: {
          ...prevVal.registerFormValidations,
          email: newEmail,
        },
        registerFormValues: {
          ...prevVal.registerFormValues,
          email: text,
        },
        registerFormErrorTexts: {
          ...prevVal.registerFormErrorTexts,
          email: newEmail ? ErrorTextsEnum.EMAIL_INCORRECT : "",
        },
      };
    });
  };

  const setNewPassword = (text: string) => {
    setNewUserForm((prevVal: IRegisterForm) => {
      const isPassValid = !isValidPassword(text);

      return {
        registerFormValidations: {
          ...prevVal.registerFormValidations,
          password: isPassValid,
        },
        registerFormValues: {
          ...prevVal.registerFormValues,
          password: text,
        },
        registerFormErrorTexts: {
          ...prevVal.registerFormErrorTexts,
          password: isPassValid ? ErrorTextsEnum.PASS_MIN_LENGTH : "",
        },
      };
    });
  };

  const setConfirmPass = (text: string) => {
    setNewUserForm((prevVal: IRegisterForm) => {
      const passwordMatches = !isPasswordMatch(
        text,
        prevVal.registerFormValues.password
      );

      return {
        registerFormValidations: {
          ...prevVal.registerFormValidations,
          confirmPassword: passwordMatches,
        },
        registerFormValues: {
          ...prevVal.registerFormValues,
          confirmPassword: text,
        },
        registerFormErrorTexts: {
          ...prevVal.registerFormErrorTexts,
          confirmPassword: passwordMatches
            ? ErrorTextsEnum.CONFIRM_PASSWORD
            : "",
        },
      };
    });
  };

  const registerNewUser = () => {
    if (newUserForm === INITIAL_REGISTER_FORM) {
      dispatch(
        setSnackBarMessage({
          messageText: "Complete el formulario",
          severity: "error",
        })
      );
      return;
    }

    if (isFormValid(newUserForm.registerFormValidations)) {
      console.log(JSON.stringify(newUserForm.registerFormValues, null, 3));
      dispatch(createNewUser(newUserForm.registerFormValues));
      return;
    }
    dispatch(
      setSnackBarMessage({
        messageText: "Formulario con errores",
        severity: "error",
      })
    );
    return;
  };

  const login = () => {
    // TODO: poner la logica de logIn here
    dispatch(getAuthToken(credentials, navigateToHome));
  };

  useEffect(() => {
    dispatch(checkAuthToken());
    if (!isLoggedIn) {
      route.push(RoutesEnum.LOGIN);
    } else {
      navigateToHome();
    }
  }, [isLoggedIn]);

  return {
    isLoading,
    isRegister,
    login,
    loginFormActions: { setPassword, setEmail, changeLoginFormToRegister },
    registerFormActions: {
      changeRegisterFormToLogin,
      fullNameInputProps: {
        error: newUserForm.registerFormValidations.userName,
        value: newUserForm.registerFormValues.userName,
        errorText: newUserForm.registerFormErrorTexts.userName,
        setFullName,
      },
      emailInputProps: {
        error: newUserForm.registerFormValidations.email,
        value: newUserForm.registerFormValues.email,
        errorText: newUserForm.registerFormErrorTexts.email,
        setNewEmail,
      },
      newPasswordProps: {
        error: newUserForm.registerFormValidations.password,
        value: newUserForm.registerFormValues.password,
        errorText: newUserForm.registerFormErrorTexts.password,
        setNewPassword,
      },
      confirmPasswordProps: {
        error: newUserForm.registerFormValidations.confirmPassword,
        value: newUserForm.registerFormValues.confirmPassword,
        errorText: newUserForm.registerFormErrorTexts.confirmPassword,
        setConfirmPass,
      },
      registerNewUser,
    },
  };
};
