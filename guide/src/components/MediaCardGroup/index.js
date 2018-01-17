import React from 'react';
import { P } from 'cyverse-ui';
import { Figure } from '../../_common/components';
import ComponentDoc from '../../_common/components/ComponentDoc';
import CodeBlock from '../../_common/components/CodeBlock';

import MediaCardGroupEx from './MediaCardGroupEx';
import MediaCardGroupExCode from '!raw-loader!./MediaCardGroupEx';

import { parse } from 'react-docgen';
import MediaCardGroup from '!raw-loader!cyverse-ui/MediaCardGroup';
const meta = parse(MediaCardGroup);

class MediaCardGroupDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ `MediaCard Example` } >
                    <MediaCardGroupEx/>
                    <CodeBlock text={ MediaCardGroupExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default MediaCardGroupDoc;
