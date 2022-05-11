import React from "react";

function useStorageListener(sincronize) {
    const [storageListener, setStorageListener] = React.useState(false);
    React.useEffect(() => {
        const onChange = (change) => {
            if (change.key === "TODOS_V1") {
                console.log("Hubo cambios en TODOS_V1");
                setStorageListener(true);
            }
        };

        window.addEventListener("storage", onChange);

        return () => {
            window.removeEventListener("storage", onChange);
        };
    }, []);
    const toggleShow = () => {
        sincronize();
        setStorageListener(false);
    };
    return {
        show: storageListener,
        toggleShow: toggleShow,
    };
}

export {useStorageListener};