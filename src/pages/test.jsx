import React, { useState } from 'react'
import Modal from '../components/common/Modal'

export default function test() {
    const [showModal, setShowModal] = useState(false);

  return (
    <>
     <button onClick={()=>{setShowModal(true)}}>openModal</button> 
     {showModal && <Modal onClickCancel={()=>{setShowModal(false)}}>
        This is a modal
        </Modal>}
    </>
  )
}
