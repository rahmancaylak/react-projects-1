import React from 'react'
import { Spinner, Heading, Center } from '@chakra-ui/react'

function Loading() {
  return (
    <>
      <Center h='100vh'>
        <Heading mr='5'>Loading... </Heading>
        <Spinner color='teal'/>
        </Center>
    </>
  )
}

export default Loading