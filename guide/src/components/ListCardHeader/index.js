import React from 'react';
import { P } from 'cyverse-ui';
import { Figure, ComponentDoc, CodeBlock } from '../../_common/components';

import ListCardHeaderEx from './ListCardHeaderEx';
import ListCardHeaderExCode from '!raw-loader!./ListCardHeaderEx';
import { parse } from 'react-docgen';
import ListCardHeader from '!raw-loader!cyverse-ui/ListCardHeader';
const meta = parse(ListCardHeader);

class ListCardHeaderDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ 'ListCardHeader Example' } >
                    <ListCardHeaderEx/>
                    <CodeBlock text={ ListCardHeaderExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default ListCardHeaderDoc;
