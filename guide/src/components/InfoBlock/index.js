import React from 'react';
import { P } from 'cyverse-ui';
import { parse } from 'react-docgen';
import { Figure } from '../../_common/components';
import ComponentDoc from '../../_common/components/ComponentDoc';
import CodeBlock from '../../_common/components/CodeBlock';
import InfoBlock from '!raw-loader!cyverse-ui/InfoBlock';
import InfoBlockEx from './Example';
import InfoBlockExCode from '!raw-loader!./Example';

const meta = parse(InfoBlock);

class InfoBlockDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ `InfoBlock Example` } >
                    <InfoBlockEx/>
                    <CodeBlock text={ InfoBlockExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default InfoBlockDoc;
