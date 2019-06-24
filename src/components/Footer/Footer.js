

import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import { CSSTransition } from 'react-transition-group';

function Example() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [active, setActive] = useState(false);
  return (
    <div style={{minHeight:'250px'}}>
        <Button
          onClick={() => {setActiveIndex(100);setActive(!active)}}
        >
        Click me
        </Button>

      <CSSTransition
        in={active}
        className='well'
        timeout={300}
        unmountOnExit
        onEntering={() => setActiveIndex(50)}
      >
        <Button >Transform</Button>
      </CSSTransition>
    </div>
  );
}


const Footer = ()=>{
  return (
    <Example/>
  )
}
export default Footer
