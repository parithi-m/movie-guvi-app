import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const students = [
    {
      name: "Maddy",
      pic: "https://wallpaperaccess.com/full/2213424.jpg",
    },
    {
      name: "Luffy",
      pic: "https://i.pinimg.com/236x/f6/e0/cb/f6e0cbd12630674a1ecf5031dd027a0c.jpg",
    },
    {
      name: "Netra",
      pic: "https://play-lh.googleusercontent.com/I-Yd5tJnxw7Ks8FUhUiFr8I4kohd9phv5sRFHG_-nSX9AAD6Rcy570NBZVFJBKpepmc=w240-h480-rw",
    },
    {
      name: "Peter",
      pic: "https://avatars.githubusercontent.com/u/29706842?v=4",
    },
  ];
  return (
    <div className="App">
      {students.map((student) => (
        <Welcome name={student.name} pic={student.pic} />
      ))}
    </div>
  );
}

export default App;

// function Welcome(props) {
//   return (
//     <div>
//       <img className="profile-pic" src={props.pic} alt={props.name} />
//       <h1>Hello, I am {props.name} 😎</h1>
//     </div>
//   );
// }
function Welcome({ pic, name }) {
  return (
    <div>
      <img className="profile-pic" src={pic} alt={name} />
      <h1>Hello, I am {name} 😎</h1>
    </div>
  );
}
