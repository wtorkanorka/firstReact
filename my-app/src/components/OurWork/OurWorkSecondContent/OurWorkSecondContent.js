import React from 'react'

export default function OurWorkSecondContent(props) {
  console.log(props.file)
  let file = props.file.map(item => (
    <img src={item.image} alt="123" key={item.id} />
  ))

  return <>{file}</>
}
