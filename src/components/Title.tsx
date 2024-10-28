import React from 'react'

type TitleProps = {
  name: string;
}

const Title = ({name}: TitleProps) => {
  return (
    <h2>Hello, {name}!</h2>
  )
}

export default Title