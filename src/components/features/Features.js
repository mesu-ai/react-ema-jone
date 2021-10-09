import React from 'react';

const Features = (props) => {
    const {feature} =props;
    
    return (
        <div>
            <span>{feature.description}: {feature.value}</span>
            
        </div>
    );
};

export default Features;