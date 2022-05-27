import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4   p-5' style={{ color: 'white' }}>
            <div class="card w-96 bg-primary text-primary-content">
                <div class="card-body">
                    <h2 class="card-title">How will you improve the performance of a React Application?</h2>
                    <p>Keeping component state local where necessary.
                        Memoizing React components to prevent unnecessary re-renders.
                        Code-splitting in React using dynamic import()</p>

                </div>
            </div>
            <div class="card w-96 bg-primary text-primary-content">
                <div class="card-body">
                    <h2 class="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p>There are several  ways to manage state​s in React, including the use of:
                        Hooks.
                        React Context API.
                        Apollo Link State.</p>

                </div>
            </div>
            <div class="card w-96 bg-primary text-primary-content">
                <div class="card-body">
                    <h2 class="card-title">How does prototypical inheritance work?</h2>
                    <p>prototypal inheritance includes not only prototypes inheriting from other prototypes but also objects inheriting from prototypes.</p>

                </div>
            </div>
            <div class="card w-96 bg-primary text-primary-content">
                <div class="card-body">
                    <h2 class="card-title">What is a unit test? Why should write unit tests?</h2>
                    <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation.
                        One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code.
                    </p>

                </div>
            </div>
            <div class="card w-96 bg-primary text-primary-content">
                <div class="card-body">
                    <h2 class="card-title">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <p> A product description is the marketing copy that explains what
                        a product is and why it’s worth purchasing. The purpose of a product
                        description is to supply customers with important information about
                        the features and benefits of the product so they’re compelled to buy?</p>

                </div>
            </div>

        </div>
    );
};

export default Blogs;