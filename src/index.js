// 1-  Kullanacagimiz kutuphane library import ederiz
import React from 'react'
import ReactDOM from 'react-dom'



// 2-  Component kendisini olusturutoruz

const App = () => {
  return (
    <div>
      <h1> Hi react !</h1>
    </div>
  )
}


// 3-  Ekranda gosteriyoruz // gosterilecek yere gonderiyoruz (export)

//ReactDOM.render(element, DomManipulation )
ReactDOM.render(<App/>, document.querySelector("#root"))

