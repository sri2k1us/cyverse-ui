import React from 'react';
import { P } from 'cyverse-ui';
import { Figure } from '../../components';
import ComponentDoc from '../../components/ComponentDoc';
import CodeBlock from '../../components/CodeBlock';

import VerticalMenuEx from './VerticalMenuEx';
import VerticalMenuExCode from '!raw-loader!./VerticalMenuEx';

import { parse } from 'react-docgen';
import VerticalMenu from '!raw-loader!cyverse-ui/VerticalMenu';
const meta = parse(VerticalMenu);

class VerticalMenuDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ `VerticalMenu Example` } >
                    <VerticalMenuEx/>
                    <CodeBlock text={ VerticalMenuExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default VerticalMenuDoc;
