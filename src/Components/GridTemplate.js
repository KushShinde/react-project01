import React from 'react'
import App  from '../App';
import { Card } from 'react-bootstrap';
import Data from '../Data';



 function GridTemplate(props) {
  return (
    <>
    <div >
    <span><img src='https://img.traveltriangle.com/blog/wp-content/uploads/2017/05/Cover11.jpg' className='Image-01'/></span>
    <span><img src='https://assets.traveltriangle.com/blog/wp-content/uploads/2020/01/Cover-Image-of-Places-to-Visit-in-Mussoorie_22nd-Jan.jpg' className='Image-02'/></span>
    <span><img src='https://www.india.com/wp-content/uploads/2018/08/2-Lake-Pichola.jpg' className='Image-03'/></span>
     
    </div>
    <br/>
    <br/>
    <div className='latest'> <b>The Latest </b> </div>
    <br/>
    <br/>
    <hr/>
    <br/>
    <br/>
<div className='Container-template'>
<span className='Container-item-01'>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThXGJ71hwXda-qP1F7YPmavKm0lDWhzUcsBA&usqp=CAU"  />
  <Card.Body>
    <Card.Title>{props.headline}</Card.Title>
    <Card.Text>
      {props.Para}
    </Card.Text>
    
  </Card.Body>
</Card>
</span>

<span className='Container-item-01'>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThXGJ71hwXda-qP1F7YPmavKm0lDWhzUcsBA&usqp=CAU"  />
  <Card.Body>
    <Card.Title>{props.headline}</Card.Title>
    <Card.Text>
      {props.Para}
    </Card.Text>
    
  </Card.Body>
</Card>
</span>
<span className='Container-item-01'>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThXGJ71hwXda-qP1F7YPmavKm0lDWhzUcsBA&usqp=CAU"  />
  <Card.Body>
    <Card.Title>{props.headline}</Card.Title>
    <Card.Text>
      {props.Para}
    </Card.Text>
    
  </Card.Body>
</Card>
</span>
<span className='Container-item-01'>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThXGJ71hwXda-qP1F7YPmavKm0lDWhzUcsBA&usqp=CAU"  />
  <Card.Body>
    <Card.Title>{props.headline}</Card.Title>
    <Card.Text>
      {props.Para}
    </Card.Text>
    
  </Card.Body>
</Card>
</span>
</div>
<br/>
    <br/>
    <br/>
    <br/>
    <div className='latest'><b>The Upcoming</b></div>
    <br/>
    <hr/>
    <br/>
    <br/>
    <div className='container-04'>
 <span className='Container-item-01'>
   <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThXGJ71hwXda-qP1F7YPmavKm0lDWhzUcsBA&usqp=CAU"  />
   <Card.Body>
   <Card.Title>{props.headline}</Card.Title>
   <Card.Text>
      {props.Para}
    </Card.Text>
    </Card.Body>
</Card>
</span>
<span className='Container-item-01'>
   <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThXGJ71hwXda-qP1F7YPmavKm0lDWhzUcsBA&usqp=CAU"  />
   <Card.Body>
   <Card.Title>{props.headline}</Card.Title>
   <Card.Text>
      {props.Para}
    </Card.Text>
    </Card.Body>
</Card>
</span>
<span className='Container-item-01'>
   <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThXGJ71hwXda-qP1F7YPmavKm0lDWhzUcsBA&usqp=CAU"  />
   <Card.Body>
   <Card.Title>{props.headline}</Card.Title>
   <Card.Text>
      {props.Para}
    </Card.Text>
    </Card.Body>
</Card>
</span>
<span className='Container-item-01'>
   <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThXGJ71hwXda-qP1F7YPmavKm0lDWhzUcsBA&usqp=CAU"  />
   <Card.Body>
   <Card.Title>{props.headline}</Card.Title>
   <Card.Text>
      {props.Para}
    </Card.Text>
    </Card.Body>
</Card>
</span>
</div>
<br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className='latest'><b>Latest Stories</b></div>

    <br/>
    <hr/>
    <br/>
    <br/>
    </>
)}
export default GridTemplate;