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
        <PlainFunction firstName="Imran" lastName="Munawar"/>
        <ArrowFunction firstName="Imran" lastName="Munawar"/>
        <MediaCard title="Profile Picture" body="This is the body of the Media Card" imageUrl="https://picsum.photos/seed/picsum/250/130"/>
        <Gate isOpen={false}/>
    </div>
    )
}

ReactDOM.render(<Assignments/>, document.querySelector('#root'));