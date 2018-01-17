import React from 'react';
import { P } from 'cyverse-ui';
import { Figure, ComponentDoc, CodeBlock } from '../../_common/components';

import ButtonMenuEx from './ButtonMenuEx';
import ButtonMenuExCode from '!raw-loader!./ButtonMenuEx';

import { parse } from 'react-docgen';
import ButtonMenu from '!raw-loader!cyverse-ui/ButtonMenu';
const meta = parse(ButtonMenu);

class ButtonMenuDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ `ButtonMenu Example` } >
                    <ButtonMenuEx/>
                    <CodeBlock text={ ButtonMenuExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default ButtonMenuDoc;
