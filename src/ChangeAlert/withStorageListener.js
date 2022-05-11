import React from "react";

function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
        const [storageListener, setStorageListener] = React.useState(false);
        return (
            <WrappedComponent
                show={storageListener}
                toggleShow={setStorageListener}
            />
        );
    }
}
export { withStorageListener };