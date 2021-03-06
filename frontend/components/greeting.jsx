import React from 'react';
import { Link } from 'react-router';

export const Greeting = (props) => {
  if (props.currentUser !== null) {
    return (
      <section className="section-header group">
        <header className="main-header group">
          <ul className="main-header-rep group">
            <li><a href="#"><img src={window.images.logo}/></a></li>
            <li><a href="#">Found</a></li>
          </ul>

          <nav className="main-header-nav group logged-in">
            <Link to ={"/"}>Write a story</Link>
            <Link to={"/users/" + props.currentUser.id}>{ props.currentUser.username }</Link>
            <a href="#" className="main-header-nav-other" onClick= { props.signout }>Sign out</a>
          </nav>
        </header>

        <nav className="story-nav group">
          <Link to='/'>Your Stories</Link>
        </nav>


      </section>
    );
  } else {
    // TODO: refactor this into a simpler render
    return (
      <section className="section-header group">
        <header className="main-header group">
          <ul className="main-header-rep group">
            <li><a href="#"><img src={window.images.logo}/></a></li>
            <li><a href="#">Found</a></li>
          </ul>

          <nav className="main-header-nav group not-logged-in">
            <Link to={"/signin"}>Write a story</Link>
            <Link to='/signup' id="signup">Signup</Link>
            <p id="slash">/</p>
            <Link to='/signin' id="signin">Signin</Link>
          </nav>
        </header>

        <nav className="story-nav group">
          <a href="#">Your Feed</a>
        </nav>


      </section>
    );
  }
};
