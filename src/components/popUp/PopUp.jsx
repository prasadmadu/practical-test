import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import axios from "axios";
import { useState, useEffect } from 'react';

const PopUp = ({show, todoId, closePopup}) => {
  const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`;

  const [todoDetail, setTodoDetail] = useState([])

  useEffect(() => {    
    async function getData(){
      const request = await axios.get(url);
      setTodoDetail(request.data)
    }
    getData();
  }, [url]);

  return (
    <div>
      <Modal show={show} onHide={closePopup}>
        <Modal.Header closeButton>
          <Modal.Title>
            ID: {todoId}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            User: {todoDetail.userId}
          </p>
          <p>
            Title: {todoDetail.title}
          </p>
          <p>
            Status: {todoDetail.completed ? "Completed" : "Not completed"}
          </p>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closePopup}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default PopUp