import React from 'react';
import { P } from 'cyverse-ui';
import { Figure } from '../../_common/components';
import ComponentDoc from '../../_common/components/ComponentDoc';
import CodeBlock from '../../_common/components/CodeBlock';

import ShowMoreEllipsisEx from './Example';
import ShowMoreEllipsisExCode from '!raw-loader!./Example';

import { parse } from 'react-docgen';
import ShowMoreEllipsis from '!raw-loader!cyverse-ui/ShowMoreEllipsis';
const meta = parse(ShowMoreEllipsis);

class ShowMoreEllipsisDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ `ShowMoreEllipsis Example` } >
                    <ShowMoreEllipsisEx/>
                    <CodeBlock text={ ShowMoreEllipsisExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default ShowMoreEllipsisDoc;
