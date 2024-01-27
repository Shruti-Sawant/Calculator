import styles from './ButtonContainer.module.css';
export default function ButtonContainer({ onButtonClick }) {
    const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.']

    return (
        <div className={styles.buttonsContainer}>
            {buttonNames.map((buttonName,index) => {
                return <button key={index} onClick={() => onButtonClick(buttonName)} className={styles.button}>{buttonName}
                </button>
            })}
        </div>
    );
};