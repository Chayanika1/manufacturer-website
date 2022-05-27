import React from 'react';
import Banner from '../../Banner/Banner';
import BusinessParts from '../../BusinessParts/BusinessParts';
import Extra from '../../Extra';
import Footer from '../../Footer/Footer';
import My from '../../Reviews/My';


import Tools from '../../ToolsName/Tools';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Tools></Tools>
            
            <BusinessParts></BusinessParts>
            <My></My>
           <Extra>

           </Extra>
          
            
            
            
            
        </div>
    );
};

export default Home;