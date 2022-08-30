import logo from './logo.svg';
import './App.css';
import './index.js';
import './link.js';


function App() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light" >
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse " id="navbarTogglerDemo01">
      <a class=" nav-link active navbar-brand" href="#">Hidden brand</a>
      

     
      <ul class="navbar-nav myUL  mb-2 mb-lg-0  ms-auto">
     
        <li class="nav-item ">
          <a class="nav-link active nav-content" aria-current="page" id='active' href="#">Home</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link  nav-content" href="link.js">Link</a>
        </li>
        <li class="nav-item  ">
          <a class="nav-link nav-content" href="#">Link</a>
        </li>
      </ul>

      </div>

    
  </div>
    </nav>
  );
}

// const activePage = window.location.pathname;
// const navlinks = document.querySelector("nav a").
// forEach(link => {
// if(link.href.includes(`${activePage}`))
// {
//   link.classList.add('active');
// }
// })

export default App;
