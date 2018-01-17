import React from 'react';
import {  Hr, P, Title, Element } from 'cyverse-ui';
import { Header, SideNav } from './components';

import 'normalize.css';
import '../assets/css/base.css';
import '../assets/css/github.css';

export default class extends React.Component {

    style = () => {
        return {
            main: {
                flex: 1,
                background: "whitesmoke",
                width: "0",
                marginTop: 59,
                padding: 40,
            },

            content: {
                maxWidth: 1200,
                margin: "auto",
            }
        }
    };

    render() {
        const styles = this.style();

        return (
            <Element id="bodyWrapper" display="flex">
                <Header />
                <SideNav isOpen />
                <main style={ styles.main }>
                    <div style={ styles.content }>
                        {this.props.children}
                    </div>
                </main>
                <footer/>
            </Element>
        )
    }
}
