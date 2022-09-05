import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const VideoModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
          <style type="text/css">
          {`
      .btn-flat {
        display: inline-block;
        margin-top: 20px;
        padding: 13px 40px;
        background: #fff;
        color: #000;
        font-weight: 600;
        border: 2px solid #fff;
        text-emphasis: none;
        transition: 0.5s ease-in-out;
      }
      .btn-flat:hover {
        background-color: transparent;
        color: #fff;
      }

      `}
        </style>
      <div>
        <Button variant="flat" className='' onClick={handleShow}>
          Último Estreno
        </Button>

        <Modal show={show} onHide={handleClose}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Go8nTmfrQd8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Modal>
      </div>
</>
      );
};