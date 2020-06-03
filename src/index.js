import React from 'react';
import ReactDOM from 'react-dom';
import PlainFunction from "./plainFunction";
import ArrowFunction from "./arrowFunction";
import MediaCard from "./mediaCard";
import Gate from "./gate";
import './index.css';

const Assignments = () => {
    return (
    <div className="assignmentDiv">
        <h3>React Practice Tasks</h3>
        <PlainFunction firstName="Imran" lastName="Munawar"/>
        <ArrowFunction firstName="Imran" lastName="Munawar"/>
        <MediaCard title="Profile Picture" body="This is the body of the Media Card" imageUrl="https://picsum.photos/seed/picsum/220/100"/>
        <Gate isOpen={false}/>

        Made By <a href="pk.linkedin.com/in/imran-munawar-09aa83118" style={{color: "#000000"}}><strong>IMRAN MUNAWAR</strong></a>
    </div>
    )
}

ReactDOM.render(<Assignments/>, document.querySelector('#root'));