import React from 'react';

const Footer = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4  bg-black p-5' style={{color:'white'}}>
            <div >
                <h4><i class="fa-solid fa-location-dot"></i> 21, Revolution Street. Paris,France</h4>
                <h4><i class="fa-solid fa-phone"></i> +155 123456</h4>
                <h4><i class="fa-solid fa-envelope"></i> support@company.com</h4>

            </div>
            <div>
                <h5>About The Company</h5>
                <p>In our stores you will find an array of hardware, software and all associated peripherals to fulfil your needs, backed up by friendly, helpful and expert staff.
                Our team have thousand's of hours experience repairing and solving Laptop & PC computer problems. We succesfully installed and configured hundred's of new ...

                </p>
                <h5><i class="fa-brands fa-facebook p-2"></i><i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-github p-2"></i><i class="fa-brands fa-linkedin"></i></h5>


            </div>

        </div>
    );
};

export default Footer;
