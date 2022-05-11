import React from "react";

function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
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
        const toggleShow  = () => {
            props.sincronize();
            setStorageListener(false);
        };
        return (
            <WrappedComponent
                show={storageListener}
                toggleShow={toggleShow}
            />
        );
    }
}
export { withStorageListener };