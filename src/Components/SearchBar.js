import Form from 'react-bootstrap/Form';

const SearchBar = ({ searchp, handelserchp}) => {
  
    return (

        <Form className="search">
          <Form.Group controlId="search.ControlInput">
            <Form.Label></Form.Label>
            <Form.Control 
              aria-label="Search"
              type="text"
              placeholder="Search"
              onChange={(e) => handelserchp(e.target.value)}
              value={searchp} 
            />
          </Form.Group>
        </Form>
        
    );
  }
  
  export default SearchBar;