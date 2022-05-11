import React from "react";
import { withStorageListener } from "./withStorageListener";

function ChangeAlert({show,toggleShow}) {
  if (show) {
    return <p>Hay Cambios!!!</p>;
  }else{

    return <p> No Hay Cambios!!!</p>;
  }

}
const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);
export { ChangeAlertWithStorageListener };