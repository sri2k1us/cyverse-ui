import React from 'react';
import { P } from 'cyverse-ui';
import { Figure } from '../../_common/components';
import ComponentDoc from '../../_common/components/ComponentDoc';
import CodeBlock from '../../_common/components/CodeBlock';

import ProgressAvatarEx from './Example';
import ProgressAvatarExCode from '!raw-loader!./Example';

import { parse } from 'react-docgen';
import ProgressAvatar from '!raw-loader!cyverse-ui/ProgressAvatar';
const meta = parse(ProgressAvatar);

class ProgressAvatarDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ `ProgressAvatar Example` } >
                    <ProgressAvatarEx/>
                    <CodeBlock text={ ProgressAvatarExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default ProgressAvatarDoc;
