import { useState } from "react"
import { PasswordGeneratorBody } from "../PasswordGeneratorBody/PasswordGeneratorBody"
import { PasswordGeneratorFooter } from "../PasswordGeneratorFooter/PasswordGeneratorFooter"
import { PasswordGeneratorHeader } from "../PasswordGeneratorHeader/PasswordGeneratorHeader"
import style from "./style.module.css"



export function PasswordGeneratorCard(){


    const[password , setPassword] = useState("Amazing Password");


    return <div className={style.root}>

        <div className={style.main}>

        
        <PasswordGeneratorHeader/>
        <PasswordGeneratorBody onSubmit={setPassword}/>

        </div>
        <PasswordGeneratorFooter password={password}/>
        </div>
}