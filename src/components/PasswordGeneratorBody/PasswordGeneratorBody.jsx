import { generatePassword } from "../../lib/password";
import style from "./style.module.css";

export function PasswordGeneratorBody(props) {

  const submit = (e) => {
    e.preventDefault();

      let formData = {}
    
      new FormData(e.currentTarget).forEach((value , key) => {
        formData[key] = value;
      });

      console.log(formData);


      props.onSubmit(generatePassword(formData));
  }



  return (
    <form onSubmit={submit}>
      <div className={style.container}>
        <div className={style.items}>
          Size
          <select name="size" defaultValue={15}>
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
          </select>
        </div>

        <div className={style.items} >
          UpperCase
          <input name="uppercase" type="checkbox" defaultChecked />
        </div>

        <div className={style.items} >
          Numbers
          <input name="numbers" type="checkbox" defaultChecked />
        </div>
        <div className={style.items} >
          Specials
          <input name="specials" type="checkbox" defaultChecked />
        </div>
      </div>
      <div className={style.btn_container}>
        <button type="submit" className={style.button}>GENERATE</button>
      </div>
    </form>
  );
}
