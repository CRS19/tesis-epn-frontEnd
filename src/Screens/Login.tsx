import React from "react";
import { isNil } from "lodash";

export default function Login() {
  const envVariable = process.env.NEXT_PUBLIC_EL_PEPE_VARIBALE;

  return (
    <div>
      <p>Hola mundo</p>
      <p>
        {isNil(process.env.NEXT_PUBLIC_EL_PEPE_VARIBALE) ? "true" : "false"}
      </p>
      <p>{envVariable}</p>
    </div>
  );
}
