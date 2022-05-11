import React from "react";
import {withStorageListener} from "./withStorageListener";

function ChangeAlert({show, toggleShow}) {
    if (show) {
        return (
            <div>
                <p>Hay Cambios!!!</p>
                <button onClick={
                    () => toggleShow(false)
                }>Recargar
                </button>
            </div>
        );
    } else {

        return <p> No Hay Cambios!!!</p>;
    }

}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);
export {ChangeAlertWithStorageListener};