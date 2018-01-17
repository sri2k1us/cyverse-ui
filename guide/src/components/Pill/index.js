import React from 'react';
import { P } from 'cyverse-ui';
import { Figure } from '../../_common/components';
import ComponentDoc from '../../_common/components/ComponentDoc';
import CodeBlock from '../../_common/components/CodeBlock';

import PillEx from './Example';
import PillExCode from '!raw-loader!./Example';

import { parse } from 'react-docgen';
import Pill from '!raw-loader!cyverse-ui/Pill';
const meta = parse(Pill);

class PillDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ `Pill Example` } >
                    <PillEx/>
                    <CodeBlock text={ PillExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default PillDoc;
