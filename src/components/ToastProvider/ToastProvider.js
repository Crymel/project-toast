import React from "react";
import useEscKey from "../../hooks/useEscKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
	const [toastStack, setToastStack] = React.useState([]);

	useEscKey(() => setToastStack([]));

	const addToast = (message, variant) => {
		setToastStack([
			...toastStack,
			{
				message: message,
				variant: variant,
				id: crypto.randomUUID(),
			},
		]);
	};

	const deleteToast = (id) => {
		setToastStack(toastStack.filter((toast) => toast.id !== id));
	};

	return (
		<ToastContext.Provider value={{ toastStack, addToast, deleteToast }}>
			{children}
		</ToastContext.Provider>
	);
}

export default ToastProvider;
