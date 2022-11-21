import React, { Component } from 'react'

class Skills extends Component {

    constructor(props) {
        super(props);

        this.state = {
            'myskills': ['HTML', 'Java', 'C', 'Dart', 'PHP', 'JS']
        }
        this.state3 = {
            'myskills': ['SQL','Firebase']
        }
        this.state1 = {
            'myskills': ['Communication', 'Time Management', 'Life-Long Learning', 'Cooperation']
        }
        this.state4 = {
            'myskills': ['Arduino','ESP32']
        }
        this.state5 = {
            'myskills': ['knowledge of IoT', 'network design', 'routing protocol', 'Wired LAN and Wireless LAN']
        }
    }

    render() {
        return(
            
            <div className="condiv skills">
                <h1 className="subtopic">My Soft Skill</h1>
                <ul>
                    {this.state1.myskills.map((value) => {
                        return <li>{value}</li>
                    })}
                </ul>
                <br/>
                <h1 className="subtopic">My Hard Skills</h1>
                <h2 >Language programming</h2>
                <ul>
                    {this.state.myskills.map((value) => {
                        return <li>{value}</li>
                    })}
                </ul>
                <h2 >Database</h2>
                <ul>
                    {this.state3.myskills.map((value) => {
                        return <li>{value}</li>
                    })}
                </ul>
                <h2 >Hardware</h2>
                <ul>
                    {this.state4.myskills.map((value) => {
                        return <li>{value}</li>
                    })}
                </ul>
                
                <h2 >Network</h2>
                <ul>
                    {this.state5.myskills.map((value) => {
                        return <li>{value}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Skills;
