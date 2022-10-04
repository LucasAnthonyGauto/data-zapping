import style from './styles.module.css'

function Input ({inputStyle="searchBars", inputType, placeholderText, onChange, name }) {
  return (
    <input className={style[inputStyle]} placeholder={placeholderText} type={inputType} onChange={onChange} name={name}/>
  )
}

export default Input