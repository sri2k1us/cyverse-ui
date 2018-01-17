import React from 'react';
import { P } from 'cyverse-ui';
import { Figure } from '../../components';
import ComponentDoc from '../../components/ComponentDoc';
import CodeBlock from '../../components/CodeBlock';

import TooltipEx from './TooltipEx';
import TooltipExCode from '!raw-loader!./TooltipEx';

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
