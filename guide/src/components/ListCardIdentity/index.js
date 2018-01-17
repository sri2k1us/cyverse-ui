import React from 'react';
import { P } from 'cyverse-ui';
import { Figure, ComponentDoc, CodeBlock } from '../../_common/components';

import ListCardIdentityEx from './Example';
import ListCardIdentityExCode from '!raw-loader!./Example';
import { parse } from 'react-docgen';
import ListCardIdentity from '!raw-loader!cyverse-ui/ListCardIdentity';
const meta = parse(ListCardIdentity);

class ListCardIdentityDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ 'ListCardIdentity Example' } >
                    <ListCardIdentityEx/>
                    <CodeBlock text={ ListCardIdentityExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default ListCardIdentityDoc;
