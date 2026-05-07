import React from "react";
import Button from "../Button";
import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf";
import { ToastContext } from "../ToastProvider/ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
const DEFAULT_VARIANT = "notice";

function ToastPlayground() {
	const [draftMessage, setDraftMessage] = React.useState("");
	const [draftVariant, setDraftVariant] = React.useState(DEFAULT_VARIANT);
	const addToast = React.useContext(ToastContext).addToast;

	const submitToast = (event) => {
		event.preventDefault();
		addToast(draftMessage, draftVariant);

		setDraftMessage("");
		setDraftVariant(DEFAULT_VARIANT);
	};

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>
			<ToastShelf />
			<form className={styles.controlsWrapper} onSubmit={submitToast}>
				<div className={styles.row}>
					<label
						htmlFor="message"
						className={styles.label}
						style={{ alignSelf: "baseline" }}>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<input
							id="message"
							className={styles.messageInput}
							value={draftMessage}
							onChange={(event) => {
								setDraftMessage(event.target.value);
							}}
						/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						{VARIANT_OPTIONS.map((option) => (
							<label htmlFor={`variant-${option}`} key={option}>
								<input
									id={`variant-${option}`}
									type="radio"
									name="variant"
									value={option}
									checked={draftVariant === option}
									onChange={(event) => {
										setDraftVariant(event.target.value);
									}}
								/>
								{option}
							</label>
						))}
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<Button>Pop Toast!</Button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ToastPlayground;
