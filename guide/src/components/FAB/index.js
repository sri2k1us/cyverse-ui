import React from 'react';
import { P } from 'cyverse-ui';
import { Figure, ComponentDoc, CodeBlock } from '../../_common/components';

import FABEx from './Example';
import FABExCode from '!raw-loader!./Example';

import FAB from '!raw-loader!cyverse-ui/FAB';
import { parse } from 'react-docgen';
const meta = parse(FAB);

class FABDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ `FAB Example` } >
                    <FABEx/>
                    <CodeBlock text={ FABExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default FABDoc;
