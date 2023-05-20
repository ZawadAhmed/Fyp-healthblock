import { Button, Container } from '@nextui-org/react';
import Menubar from "../components/MenuBar"
import metamask from "../ethereum/metamask"

const Test = () => {
    return (
  
        
       
  
       <Container>    
        <h1>Welcome to my website!</h1>
        <p>This is the homepage.</p>
    
       <Menubar/>
        
        <button onClick='enableEthereumButton'> Click me</button>; 
        
        
        </Container>
        
  
    )
  }
  
  export default Test
 
