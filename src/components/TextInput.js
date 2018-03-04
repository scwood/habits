import React from 'react'

const TextInput = () => {
  return (
    <div>
      <label className="f6 b db mb2">Description</label>
      <input
        id="name"
        className="input-reset ba b--black-20 pa2 mb2 db w-100"
        type="text"
      />
    </div>
  )
}

export default TextInput
