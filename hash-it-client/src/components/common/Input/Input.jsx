import React from 'react'

import './style.scss'

function Input({ refs, borderColor = 'black', ...other }) {
  return (
    <div className="input-block">
      <form>
        <input
          style={{ border: `1px solid ${borderColor}` }}
          className="form-input"
          ref={refs}
          defaultValue=''
          {...other}
        />
      </form>
      {/* {!hideError ? <div className="newPassError" id={id}>{errorMesage}</div> : null} */}
    </div>
  )
}

export default Input