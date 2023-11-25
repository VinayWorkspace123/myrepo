import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function ClickOnLink() {

  const navigate = useNavigate();

  const onClickHome = () => {
    navigate('/');
  }
  return (
    <div>ClickOnLink
      <Button onClick={onClickHome}>Home</Button>
    </div>
  )
}
