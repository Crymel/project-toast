import React from "react";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
	const toastStack = React.useContext(ToastContext).toastStack;

	return (
		<ol
			className={styles.wrapper}
			role="region"
			aria-live="polite"
			aria-label="Notification">
			{toastStack.map((toast) => (
				<li className={styles.toastWrapper} key={toast.id}>
					<Toast toast={toast} />
				</li>
			))}
		</ol>
	);
}
export default ToastShelf;
