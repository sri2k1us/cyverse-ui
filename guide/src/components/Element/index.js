import React from 'react';
import { P } from 'cyverse-ui';
import { Figure, ComponentDoc, CodeBlock } from '../../_common/components';

import ElementEx from './Example';
import ElementExCode from '!raw-loader!./Example';
import { parse } from 'react-docgen';
import Element from '!raw-loader!cyverse-ui/Element';
const meta = parse(Element);

class ElementDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ 'Element Example' } >
                    <ElementEx/>
                    <CodeBlock text={ ElementExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default ElementDoc;
