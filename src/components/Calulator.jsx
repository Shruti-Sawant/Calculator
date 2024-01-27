import { useState } from "react"
import ButtonContainer from "./ButtonContainer.jsx"
import styles from "./Calculator.module.css"
import Display from "./Display.jsx"
export default function Calculator() {
    let [calval, setCalval] = useState("");
    const onButtonClick = (buttontext) => {
       
        if(buttontext=== 'C'){
            setCalval("")
        }else if(buttontext === '='){
               let total= eval(calval)
            setCalval(total)
        }else{
            const inputval=calval+buttontext;
            setCalval(inputval);
        }
    }
    return (
        <div className={styles.Calculator}>
            <Display calval={calval} />
            <ButtonContainer onButtonClick={onButtonClick} />
        </div>
    )
}