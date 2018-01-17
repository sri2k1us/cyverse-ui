import React from 'react';
import { P } from 'cyverse-ui';
import { Figure } from '../../_common/components';
import ComponentDoc from '../../_common/components/ComponentDoc';
import CodeBlock from '../../_common/components/CodeBlock';

import VerticalMenuEx from './Example';
import VerticalMenuExCode from '!raw-loader!./Example';

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
