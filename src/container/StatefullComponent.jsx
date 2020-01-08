import React from 'react';

//kita membuat komponen dengan class component/statfull componen dimana dia memanggil(extends) react.component
class StatefullComponent extends React.Component{
    //harus tambahkan metod render karena render yang pertama akan dieksekusi    
        render(){
            return <p>StatefullComponent</p>
        }
    }

//agar komponen bisa digunakan dimana saja
export default StatefullComponent;
