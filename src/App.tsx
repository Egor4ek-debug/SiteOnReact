import React from 'react';


function App() {
  return (
    <div className="main">
        <ul className='left_menu'>
              <li><a href="#"><img src={require("./components/Logo.png")} alt="" /></a></li>
              <li><a href="#"><img src={require("./components/Pages.png")} alt="" /></a></li>
              <li><a href="#"><img className='Sptites' src={require("./components/Facebook.png")} alt="" /></a></li>
              <li><a href="#"><img className='Sptites' src={require("./components/Twitter.png")} alt="" /></a></li>
              <li><a href="#"><img className='Sptites' src={require("./components/Instagram.png")} alt="" /></a></li>
        </ul>
        <ul className='menu'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#"><img src={require("./components/Cart.png") }alt="" /></a></li>
          <li><button className='order'>Order Today</button></li>
        </ul>
        <div className="content">
        <div className="image">
          <img src={ require("./components/Book.png")} alt="" />
        </div>
        <div className="description">
            <div className='line'>Your Books From</div>
        </div>
        </div>
    </div>
  );
}

export default App;
