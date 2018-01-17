import React from 'react';
import { P } from 'cyverse-ui';
import { Figure } from '../../_common/components';
import ComponentDoc from '../../_common/components/ComponentDoc';
import CodeBlock from '../../_common/components/CodeBlock';

import TooltipEx from './Example';
import TooltipExCode from '!raw-loader!./Example';

import { parse } from 'react-docgen';
import Tooltip from '!raw-loader!cyverse-ui/Tooltip';
const meta = parse(Tooltip);

class TooltipDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ `Tooltip Example` } >
                    <TooltipEx/>
                    <CodeBlock text={ TooltipExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default TooltipDoc;
