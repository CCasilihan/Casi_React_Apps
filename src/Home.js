import * as React from "react";
//import { Card } from "react-bootstrap";
import "./App.css";
import backgroundImage from './images/sky.jpg'; 
//import { Button } from 'react-bootstrap';

function Home() {
  return (
    <section className="hero shadow" style={{ backgroundImage: `url(${backgroundImage})`, 
    backgroundSize: 'cover', boxShadow: '0 0 0 2000px rgba(0,0,0,0.9)' }}>
      <div className="content" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', 
        backgroundSize: 'cover'
      }}>
        <h1>Welcome to my personal webpage!</h1>
        <p>
  <strong>
    This webpage offers a glimpse into my world, passions, and interests, 
    featuring articles on technology, creativity, and personal anecdotes. 
    Join me on a virtual adventure to explore knowledge and imagination.
  </strong>
</p>

//         <Card style={{ width: '18rem' }}>
//   <Card.Body>
//     <Card.Title>Visit My Facebook Account</Card.Title>
//     <Card.Text>
//       {/* Some quick example text to build on the card title and make up the bulk of the card's content. */}
//     </Card.Text>
//     <Button variant="primary" href="https://www.facebook.com/charisse.casilihan/">Visit</Button>
//   </Card.Body>
// </Card>
      </div>
    </section>
  );
}

export default Home;




// import * as React from "react";
// import "./App.css";


// function Home() {
//   return (
//     <section className="hero">
//       <div className="content" style={{ 
//         display: 'flex', 
//         flexDirection: 'column', 
//         justifyContent: 'center', 
//         alignItems: 'center', 
//         height: '50vh', 
//         backgroundSize: 'cover'
//       }}>
//         <h1>Welcome to my personal webpage!</h1>
//         <p>
//           This webpage offers a glimpse into my world, passions, and interests, 
//           featuring articles on technology, creativity, and personal anecdotes. 
//           Join me on a virtual adventure to explore knowledge and imagination.
//         </p>
//       </div>
//     </section>
//   );
// }

// export default Home;
