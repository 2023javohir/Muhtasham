import React, { useState, useEffect } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from '@chakra-ui/react'
import { Link,useNavigate } from 'react-router-dom';


const Foydalanuvchilar = () => {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('./users.json').then(response => {
      // console.log(response);
      return response.json();
    }).then(data => {
      // Work with JSON data here
        setUsers(data);
    }).catch(err => {
      // Do something for an error here
      console.log("Error Reading data " + err);
    });
  }, [])
  console.log(users); 


  let history = useNavigate ();

  const handleDelete =(id) => { 
    var index = users. map (function (e){
      return e.id
    }).indexOf(id);

    users.splice(index,1);
    history('/');
  }
  return (
    <div>

<Button colorScheme='teal' size='sm'>
  <Link to="/StudentCreate" >Add Student</Link>
  
  </Button>

      <TableContainer>
        <Table variant='simple'>
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>T/R</Th>
              <Th>Login</Th>
              <Th>Parol</Th>
              <Th>Role</Th>
          
            </Tr>
          </Thead>
          <Tbody>
          {
            users.map((user,index) => {
            return(

            
              <Tr>
                <Td>{index + 1}</Td>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                
                <Td >
                <Button onClick={() => alert(user.id)} colorScheme='red' size='xs' mr={'14px'} >
                  Update
                </Button>
               &nbsp;
                <Button onClick={() => handleDelete(user.id)} colorScheme='teal' size='xs'>
                 
                  Delete
                </Button>
                </Td>
              </Tr>
              )
              }
            )
          }
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Foydalanuvchilar