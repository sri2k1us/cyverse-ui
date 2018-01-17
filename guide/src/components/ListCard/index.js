import React from 'react';
import { P } from 'cyverse-ui';
import { Figure, ComponentDoc, CodeBlock } from '../../_common/components';

import ListCardEx from './Example';
import ListCardExCode from '!raw-loader!./Example';
import { parse } from 'react-docgen';
import ListCard from '!raw-loader!cyverse-ui/ListCard';
const meta = parse(ListCard);

class ListCardDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ 'ListCard Example' } >
                    <ListCardEx/>
                    <CodeBlock text={ ListCardExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default ListCardDoc;
