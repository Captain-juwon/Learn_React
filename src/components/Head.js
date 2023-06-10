import React from "react";

const Head = ({ heading, link }) => {
    return (
    <div>
       <span className="heading">{heading}</span>
        <span className="link">{link}</span>
    </div>
    );
};

export default Head;