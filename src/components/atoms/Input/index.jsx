function Input ({ inputType, placeholderText, onChange }) {
  return (
    <input placeholder={placeholderText} type={inputType} onChange={onChange}/>
  )
}

export default Input