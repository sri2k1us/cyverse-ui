import React from 'react';
import { P } from 'cyverse-ui';
import { Figure } from '../../_common/components';
import ComponentDoc from '../../_common/components/ComponentDoc';
import CodeBlock from '../../_common/components/CodeBlock';

import MediaCardEx from './Example';
import MediaCardExCode from '!raw-loader!./Example';

import { parse } from 'react-docgen';
import MediaCard from '!raw-loader!cyverse-ui/MediaCard';
const meta = parse(MediaCard);

class MediaCardDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ `MediaCard Example` } >
                    <MediaCardEx/>
                    <CodeBlock text={ MediaCardExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default MediaCardDoc;
