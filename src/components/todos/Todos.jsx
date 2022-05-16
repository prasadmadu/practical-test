import axios from "axios";
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import Pagination from 'react-bootstrap/Pagination'
import _ from 'lodash'

const url = "https://jsonplaceholder.typicode.com/todos";
const pageSize = 20;

const Todos = () => { 
  const [todo, setTodo] = useState([])
  const [paginated, setPaginated] = useState()
  const [currentpage, setCurrentpage] = useState(1)

  useEffect(() => {    
    async function getData(){
      const request = await axios.get(url);
      setTodo(request.data)
      setPaginated(_(request.data).slice(0).take(pageSize).value())
    }
    getData();
  }, [url]);
  console.log('object');
  console.log(paginated);

  const pageCount = todo ? Math.ceil(todo.length/pageSize) : 0
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount+1)
  console.log(pages);
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
          todo.map( singleTodo => (
            <tr>
              <td>{singleTodo.userId}</td>
              <td>{singleTodo.id}</td>
              <td>{singleTodo.title}</td>
              <td>{singleTodo.completed ? "yes" : "no"}</td>
              
            </tr>
          ))
        }
          
        </tbody>
      </Table>
      <Pagination>
        {
          pages.map((page) => (
            <Pagination.Item>{page}</Pagination.Item>
          ))
        }
      </Pagination>
    </div>
  )
}

export default Todos