import React from 'react';
import './LeftSidebar.css';

function LeftSidebar() {
    return (
        <div className="LeftSidebar">
        <div className="UserProfile">
            <h2>User Profile</h2>
            {/* Add user profile summary content here */}
        </div>
        <div className="NavigationMenu">
            <h3>Navigation</h3>
            <ul>
            <li>Home</li>
            <li>Profile</li>
            <li>Messages</li>
            {/* Add more navigation items as needed */}
            </ul>
        </div>
        <div className="TrendingTopics">
            <h3>Trending Topics</h3>
            {/* Add trending topics content here */}
        </div>
        <div className="AIAssistant">
            <h3>AI Assistant</h3>
            {/* Add AI Assistant quick access content here */}
        </div>
        </div>
    );
}

export default LeftSidebar;