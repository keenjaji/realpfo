import React, { Component } from 'react'
import profilepic from '../img/profile2.jpg'

class About extends Component {
    render() {
        return(
            <div className="condiv about">
                <h1 className="subtopic">About Me</h1>
                {/* <img src="https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.0-9/118730292_4335787969826202_874822354429782795_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=G0lExGcor7QAX8omYaQ&_nc_ht=scontent.fbkk5-7.fna&oh=d979e3e0ac217d49d3b98b2bacd7c8d1&oe=5FB22568" alt="profile" className="profilepic" /> */}
                <img src={profilepic} width="350px" height="400px"/>
                <h3>Hi, I'm Thissanut Lakngam</h3>
                <p>A fresh  of Engineering pursuing a career as a Software developer hardware and network to ensure that system functions efficiently.
</p>
            </div>
        );
    }
}

export default About;
