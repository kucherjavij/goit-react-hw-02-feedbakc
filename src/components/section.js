import React from 'react';

function Section({children}) {
    return (
        <div>
            <h1>Please leave feedback </h1>
            {children}
        </div>
    );
}

export default Section;