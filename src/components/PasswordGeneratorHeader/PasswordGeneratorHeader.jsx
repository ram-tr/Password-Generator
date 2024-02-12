import style from "./style.module.css"

import lockIcon from "../../assets/lock.svg"

export function PasswordGeneratorHeader(){
    return <div className={style.root}>
        <div className={style.title}>Password Generator</div>
        <img src={lockIcon} alt="Lock Icon" className={style.icon}/>
    </div>
}