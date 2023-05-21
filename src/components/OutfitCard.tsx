import { Outfit } from '../services/outfit-service'
import { Card,CardBody,Heading,Image,CardFooter, HStack, Text, ButtonGroup, Button, Divider  } from '@chakra-ui/react'
import logo from "../assets/logo.svg"
import Like from './Like'

interface Props{
    outfit:Outfit
}

const GameCard = ({outfit}:Props) => {
  return (
    <Card borderRadius={10}>
        <CardBody>
        <Image src={logo} boxSize="150px" m={2}/>
            <Heading fontSize='2xl'>{outfit.title}</Heading>
            <HStack mt='20px' justify='space-between'>
            <Text>{outfit.category}</Text>
            <Text>{outfit.price}</Text>
          </HStack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              افزودن به سبد خرید
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              مشاهده
            </Button>
          </ButtonGroup>
          <Like></Like>
        </CardFooter>
        

        
    </Card>
  )
}

export default GameCard