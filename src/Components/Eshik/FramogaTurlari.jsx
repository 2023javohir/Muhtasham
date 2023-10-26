

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

const Chaspak = () => {

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
  return (
    <div>
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>T/R</Th>
              <Th>Name</Th>
              
             
          </Thead>
          <Tbody>
          {
            users.map((user, index) => (
              <Tr>
                <Td>{index + 1}</Td>
                <Td>{user.name}</Td>
                
                <Td >
                <Button colorScheme='red' size='xs' mr={'14px'} >
                  Delete
                </Button>
                <Button colorScheme='teal' size='xs'>
                  Update
                </Button>
                </Td>
              </Tr>
            ))
          }
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Chaspak
