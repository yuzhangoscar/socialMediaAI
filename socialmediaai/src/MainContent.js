import React from 'react';
import './MainContent.css';

function MainContent() {
    return (
        <div className="MainContent">
        <div className="MainContent-column MainContent-left">
            {"Left column content"}
        </div>
        <div className="MainContent-column MainContent-center">
            {"Middle column content"}
        </div>
        <div className="MainContent-column MainContent-right">
            {"Right column content"}
        </div>
        </div>
    );
}

export default MainContent;