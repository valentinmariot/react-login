import React  from 'react'
import PropTypes from "prop-types"
import {
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import FormControlStyle from "./Form.style";

const Form = ({}) => (
  <FormControlStyle as={FormControl}>
      <FormControlStyle.FormLabel
        as={FormLabel} 
        htmlFor='email'
      >
        Email address
      </FormControlStyle.FormLabel>
      <Input id='email' type='email' />
      <FormControlStyle.FormLabel
        as={FormLabel} 
        htmlFor='password'
      >
        Password
      </FormControlStyle.FormLabel>
      <Input id='password' type='password' />
      <Button
          mt={4}
          colorScheme='teal'
          type='submit'
        >
          Submit
        </Button>
    </FormControlStyle>
)

export default Form;