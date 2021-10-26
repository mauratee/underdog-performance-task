"use strict";

const url = 'https://pokeapi.co/api/v2/pokemon';


/** AJAX get request that displays response object in console. */


  // function App() {

  //   $.get(url, (response) => {
  //     console.log(response);
  //     });
  //   return
  //     <div></div>
  // }

  function App() {
    $.get(url, (response) => {
      console.log(response);
      });
    return (
      <ul>
        <li>response[0]</li>
      </ul>
    );
  }
  
  ReactDOM.render(< App />, document.querySelector('#app'));