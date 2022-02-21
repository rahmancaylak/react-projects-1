import React from 'react'
import Tour from './Tour'
import { Heading, Center, Divider, Text } from '@chakra-ui/react'

function Tours({ tours, removeTour }) {

  console.log()
  return (
    <>
      <Center>
        <Heading size='xl' mt='20'>Our Tours<Divider mt='2' mb='10' border='3px' borderColor='teal' /></Heading>
      </Center>
      {
        tours.length > 0 ?
        
          tours.map((tour) => <Tour key={tour.id} tour={tour} removeTour={removeTour} />)
          : 
          <Center>
          <Text>There is no result...</Text>
        </Center>
      }
    </>
  )
}

export default Tours