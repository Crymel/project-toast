import React from "react";

function useEscKey(callback) {
	return React.useEffect(() => {
		const keyPressEvent = (event) => {
			if (event.key === "Escape") {
				callback();
			}
		};
		window.addEventListener("keydown", keyPressEvent);

		return () => {
			window.removeEventListener("keydown", keyPressEvent);
		};
	}, [callback]);
}

export default useEscKey;
