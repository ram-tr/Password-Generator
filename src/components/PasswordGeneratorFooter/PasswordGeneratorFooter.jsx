import style from "./style.module.css";

import pasteIcon from "./../../assets/copy-paste.svg"
import { useState } from "react";

export function PasswordGeneratorFooter(props) {

    const [copied, setCopied] = useState(false);
    function saveToClipboard(){
        navigator.clipboard.writeText(props.password)

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    

    return(
    <div className={style.root} onClick={saveToClipboard}>
        <div>{props.password}</div>
        <img src={pasteIcon} alt="pasteIcon" className={style.pasteIcon}/>
        {copied && <div className={style.msg}>copied</div>}
    </div>);
}
