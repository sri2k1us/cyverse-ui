import React from 'react';
import {  Hr, P, Title, Element } from 'cyverse-ui';
import theme from './theme';

export default class extends React.Component {
    render() {
        return (
            <Element tag="section" whitespace={{mb:7 }}>
                <Title
                    h1
                    display2
                    color={ theme.color.primary }
                    mb={ 3 }
                >
                    CyVerse UI
                </Title>
                <P subheading>
                    A collection of UI components for CyVerse that extend <a href="http://www.material-ui.com/" target="_blank" title="Material-UI">Material-UI</a> adding components that handle UI patterns within the CyVerse ecosystem not covered by Material-UI.
                </P>
            </Element>
        )
    }
}
