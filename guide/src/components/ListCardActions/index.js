import React from 'react';
import { P } from 'cyverse-ui';
import { Figure, ComponentDoc, CodeBlock } from '../../_common/components';

import ListCardActionsEx from './Example';
import ListCardActionsExCode from '!raw-loader!./Example';
import { parse } from 'react-docgen';
import ListCardActions from '!raw-loader!cyverse-ui/ListCardActions';
const meta = parse(ListCardActions);

class ListCardActionsDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ 'ListCardActions Example' } >
                    <ListCardActionsEx/>
                    <CodeBlock text={ ListCardActionsExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default ListCardActionsDoc;
