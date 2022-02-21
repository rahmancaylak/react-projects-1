import React,{useState} from 'react'
import { Box, Image, Heading, Grid, Flex, Spacer, Tag, ButtonGroup, Button, Collapse } from '@chakra-ui/react'

function Tour({ tour, removeTour }) {

  const [show, setShow] = useState(false)
  const handleToggle = () => setShow(!show)

  

  return (
    <Grid templateColumns='repeat(1, 1fr)' justifyItems='center' mb='5' p='5'>
      <Box maxW='xl' borderRadius='lg' boxShadow='lg' backgroundColor='white'>
        <Image src={tour.image} alt={tour.name} height="300px" width='100%' style={{ objectFit: 'cover' }} borderRadius='base' />
        <Flex p='5' pb='0' alignItems='center'>
          <Box p='4'>
            <Heading fontSize='sm' as='h3' letterSpacing='2px'>{tour.name}</Heading>
          </Box>
          <Spacer />
          <Box p='4'>
            <Tag colorScheme='teal' letterSpacing='2px' color='teal' fontWeight='bold'>${tour.price}</Tag>
          </Box>
        </Flex>
        <Box p='5' pt='0'>
            <Collapse startingHeight={70} in={show} fontSize='lg' p='4' color='gray'>{tour.info}</Collapse>
            <Button size='sm' onClick={handleToggle} mt='1rem' display='flex' ml='auto'>{show ? 'Show Less' : 'Read More'}
            </Button>
        </Box>
        <ButtonGroup variant='outline' spacing='6' display='flex' justifyContent='center' mb='5'>
          <Button colorScheme='red' onClick={() => removeTour(tour.id)}>Not Interested</Button>
        </ButtonGroup>
      </Box>
    </Grid>
  )
}

export default Tour