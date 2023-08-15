import { Button } from 'react-bootstrap';

function ButtonTest () {
    return (
        <>
        <style type="text/css">
          {`
            .btn-flat {
                background-color: purple;
                color: white;
            }
  
            .btn-xxl {
                padding: 1rem 1.5rem;
                font-size: 1.5rem;
            }
        `}
        </style>
  
        <Button variant="flat" size="xxl">
          Teste
        </Button>
      </>
    )
}

export default ButtonTest;