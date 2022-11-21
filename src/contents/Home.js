import React, { Component } from 'react';
import profilepic from '../img/profile.jpg'

import Social from '../components/Social';
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} width="300px" height="300px" />
                <br/>
                <br/>
                <ReactTypingEffect text={['I am Thissanut Lakngam', 'I am a Electronic Engineer']} speed={70} eraseDelay={50} className="typingeffect" />
                <Social />
            </div>
        );
    }
}

export default Home;