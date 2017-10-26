import React, { Component } from 'react';

class Template extends Component {
    render() {
        return (
            <header>
                <h1>
                    Hakuna
            </h1>
            </header> ,
            <main>
                {this.props.children}
            </main>
        )
    }
}

export default Template;