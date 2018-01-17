import React from 'react';
import { P } from 'cyverse-ui';
import { Figure, ComponentDoc, CodeBlock } from '../../_common/components';

import BarGraphEx from './Example';
import BarGraphExCode from '!raw-loader!./Example';
import { parse } from 'react-docgen';
import BarGraph from '!raw-loader!cyverse-ui/BarGraph';
const meta = parse(BarGraph);

class BarGraphDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ 'BarGraph Example' } >
                    <BarGraphEx/>
                    <CodeBlock text={ BarGraphExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default BarGraphDoc;
