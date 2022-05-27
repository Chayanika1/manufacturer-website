import React from 'react';
import Banner from '../../Banner/Banner';
import BusinessParts from '../../BusinessParts/BusinessParts';
import My from '../../Reviews/My';

import Tools from '../../ToolsName/Tools';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Tools></Tools>
            
            <BusinessParts></BusinessParts>
            <My></My>
            
            
            
        </div>
    );
};

export default Home;