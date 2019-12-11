/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import julio from './juliod.jpg';



const Body = () => (
    <div className='uk-text-center'>
        <div className="card-body">
            <p className="card-text uk-text-lead  uk-light text-center">
                My name is Julio Denis and I'm a mexican freelancer. <br/>
                In my free time I like to study, read and write some code,<br/>
                studying is the best way to get successfull because you <br/>
                you can apply it in any topic and any situation, you can understand <br/> almost everything.
                <br/>
                <br/>
                Actually I'm web developer, I try to use the newer technologies. <br/>
                I use MongoDB as a database then I connect a Server with <br/>
                Node Express. That's how I write the backend and then with the frontend <br/>
                in wich actually I'm learning and using React. with its newer versions and ES6.
                <br/>
                <i> "Never Stop learning" </i>
            </p>
            <div>
                <img src={julio} width="100px" height="100px" alt="#" />
            </div>
            <div>
                <a className='p-4' target='_blank' rel="noopener noreferrer" href="https://github.com/CinderyCape27" uk-icon="icon: github; ratio: 2.5"></a>
                <a className='p-4' target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/Juliodenisz/" uk-icon="icon: facebook; ratio: 2.5"></a>
                <a className='p-4' target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/julio-denis-763721181" uk-icon="icon: linkedin; ratio: 2.5"></a>
                <a className='p-4' target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/juliodenz/" uk-icon="icon: instagram; ratio: 2.5"></a>
            </div>
        </div>
    </div>
);


export default Body;