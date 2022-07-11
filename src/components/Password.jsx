import React, { useState } from "react"

const Password = () => {
  const [password, setPassword] = useState("********")

  const genePassword = () => {
    // 16 ota matra diplay garxa
    //const password = Math.random().toString(36).slice(5) + Math.random().toString(36).slice(5)

    // 8 ota matra diplay garxa
    const password = Math.random().toString(36).slice(5)
    setPassword(password)
  }
  const copyPassword = () => {
    navigator.clipboard.writeText(password)
  }
  return (
    <>
      <div className='box'>
        <div className='password'>
          <p id='password'>{password}</p>
        </div>
        <div className='button'>
          <button onClick={genePassword}>Generator Password</button>
          <button onClick={copyPassword}>
            Copy <i className='fa fa-copy'></i>
          </button>
        </div>
      </div>
    </>
  )
}

export default Password
