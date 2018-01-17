import React from 'react';
import { pad } from 'cyverse-ui/styles';
import { GithubIcon } from '../_common/icons';
import CyverseLogo from '../_common/icons/mini_logo.svg';

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
                <img width="150px" src={CyverseLogo} />
                <div style={{float: "right"}}>
                    <a href="https://github.com/cyverse/cyverse-ui" >
                        <GithubIcon size="30" fill="white" />
                    </a>
                </div>
            </header>
        );
    }
}
