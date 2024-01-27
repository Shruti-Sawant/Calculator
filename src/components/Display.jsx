import styles from './Display.module.css';

const Display = ({ calval }) => {
    return <input className={styles.display} type="text" defaultValue={calval}/>
}
export default Display;