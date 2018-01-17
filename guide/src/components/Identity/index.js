import React from 'react';
import { P } from 'cyverse-ui';
import { Figure, ComponentDoc, CodeBlock } from '../../_common/components';

import IdentityEx from './Example';
import IdentityExCode from '!raw-loader!./Example';

import { parse } from 'react-docgen';
import Identity from '!raw-loader!cyverse-ui/Identity';
const meta = parse(Identity);

class IdentityDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ `Identity Example` } >
                    <IdentityEx/>
                    <CodeBlock text={ IdentityExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default IdentityDoc;
