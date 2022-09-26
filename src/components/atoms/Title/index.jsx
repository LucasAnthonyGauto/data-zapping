import style from './styles.module.css'

export default function Title ({ type, text, variantStyle }) {
  return (
    <>
      { type === 'h1' && <h1 className={[style[type], style[variantStyle]].join(" ")}>{text}</h1> }
      { type === 'h2' && <h2 className={[style[type], style[variantStyle]].join(" ")}>{text}</h2> }
      { type === 'h3' && <h3 className={[style[type], style[variantStyle]].join(" ")}>{text}</h3> }
      { type === 'h4' && <h4 className={[style[type], style[variantStyle]].join(" ")}>{text}</h4> }
      { type === 'h5' && <h5 className={[style[type], style[variantStyle]].join(" ")}>{text}</h5> }
    </>
  )
}