import React from 'react';
import { Link } from 'react-router';
import { pad } from 'cyverse-ui/styles';
import { GithubIcon } from '../icons';
import CyverseLogo from '../icons/mini_logo.svg';

export default class extends React.Component {
    render() {
        return (
            <header
                style={{
                    ...pad({ p: 3 }),
                    background: "#0971AB",
                    position: "fixed",
                    width: "100%",
                    zIndex: "700",
                    ...this.props.style
                }}
            >
                <Link to="/" style={{ borderBottom: 'none' }}>
                    <img width="150px" src={CyverseLogo} />
                </Link>
                <div style={{float: "right"}}>
                    <a href="https://github.com/cyverse/cyverse-ui" >
                        <GithubIcon size="30" fill="white" />
                    </a>
                </div>
            </header>
        );
    }
}
