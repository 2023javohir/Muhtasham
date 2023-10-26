import {
    FormControl,

    Box,
    Input,
    Button,
    Flex,
    Heading,
    FormLabel,
    FormHelperText
} from '@chakra-ui/react'

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function StudentCreate() {

    const [name, setname] = useState("");
    const [email, setEmail] = useState("");


    let history = useNavigate();

    const handelSubmit = (e) => {
        e.preventDefault();

       

        let a = name,
            b = email
        if (name == "" || email == "") {
            alert("invalid input");
            return;
        }
        Array.push({  name: a, email: b });
        history("/");
    };
        return (



            <Box>
                <FormControl>
                    <FormLabel> name</FormLabel>
                    <Input type='text'  onChange={(e) =>
                            setname(e.target.value)
                        } />
                    
                </FormControl>

                <FormControl>
                        <FormLabel> email</FormLabel>
                    <Input type='email'  onChange={(e) =>
                            setname(e.target.value)
                        } />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl> 
                <Button
                    onClick={(e) => handelSubmit(e)}
                    variant="primary"
                    type="submit"
                >
                    Submit
                </Button>
            </Box>
        )
    }

    export default StudentCreate