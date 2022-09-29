import style from './style.css'

function List ({type, quantity, listStyles}){
    switch (type){
      case '' :
        return quantity ? (
          <ul>
            
          </ul>
        ) : (
          <ul>
            <li></li>
          </ul>
        )
    }
}