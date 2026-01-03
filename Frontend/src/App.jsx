import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Components/Navbar';
import Container from 'react-bootstrap/esm/Container';
// import { Button } from 'react-bootstrap';
const App = () => {
  return (<>
    <NavbarComponent />
    <Container className='text-center'>
      <h1 className='display-3'>AvsarSocialMedia</h1>
      <p className='lead'>Find Friends and share your thoughts...........💭</p>
    </Container>
    {/* <Button variant="primary">Primary</Button> */}
  </>)
}

export default App