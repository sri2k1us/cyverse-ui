import React from 'react';
import { P } from 'cyverse-ui';
import { Figure } from '../../_common/components';
import ComponentDoc from '../../_common/components/ComponentDoc';
import CodeBlock from '../../_common/components/CodeBlock';

import MeterGaugeEx from './Example';
import MeterGaugeExCode from '!raw-loader!./Example';

import { parse } from 'react-docgen';
import MeterGauge from '!raw-loader!cyverse-ui/MeterGauge';
const meta = parse(MeterGauge);

class MeterGaugeDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ `MeterGauge Example` } >
                    <MeterGaugeEx/>
                    <CodeBlock text={ MeterGaugeExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default MeterGaugeDoc;
