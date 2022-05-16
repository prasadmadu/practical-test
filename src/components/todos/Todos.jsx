import axios from "axios";
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import Pagination from 'react-bootstrap/Pagination'
import _ from 'lodash'
import PopUp from "../popUp/PopUp";
import Button from 'react-bootstrap/Button'

const url = "https://jsonplaceholder.typicode.com/todos";
const pageSize = 20;

const Todos = () => {
  const [show, setShow] = useState(false);
  const [popupBox, setPopupBox] = useState('')
  const [todo, setTodo] = useState([])
  const [paginated, setPaginated] = useState([])
  const [currentpage, setCurrentpage] = useState(1)

  useEffect(() => {    
    async function getData(){
      const request = await axios.get(url);
      setTodo(request.data)
      setPaginated(_(request.data).slice(0).take(pageSize).value())
    }
    getData();
  }, [url]);

  const pageCount = todo ? Math.ceil(todo.length/pageSize) : 0
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount+1)

  const closePopup = () => {
    setShow(false)
  };
  
  const pagination = (pageNo) => {
    setCurrentpage(pageNo)
    const startIndex = (pageNo - 1) * pageSize
    const paginatedTodo = _(todo).slice(startIndex).take(pageSize).value()
    setPaginated(paginatedTodo)
  }
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User</th>
            <th>Todo Id</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
        {
          paginated.map( singleTodo => (
            <tr>
              <td>{singleTodo.userId}</td>
              <td>{singleTodo.id}</td>
              <td>{singleTodo.title}</td>
              <td>{singleTodo.completed ? "yes" : "no"}</td>
              <td>
                <Button variant="primary" onClick={e => {
                  setPopupBox(singleTodo.id);
                  setShow(true)
                }} >More</Button>
              </td>
            </tr>
          ))
        }
          
        </tbody>
      </Table>
      <Pagination>
        {
          pages.map((page) => (
            <Pagination.Item onClick={() => pagination(page)} className={page === currentpage ? "active" : ''}>{page}</Pagination.Item>
          ))
        }
      </Pagination>
      <PopUp todoId={popupBox} closePopup={closePopup} show={show}/>
    </div>
  )
}

export default Todos