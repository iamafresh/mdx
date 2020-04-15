import React from 'react'

const style = {
    height: '30px',
    width: '200px',
    backgroup: 'red',
}
const Button = ({children}) => <button style={style} >{children}</button>

export default Button