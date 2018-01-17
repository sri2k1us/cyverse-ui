import React from 'react';
import { P } from 'cyverse-ui';
import { Figure, ComponentDoc, CodeBlock } from '../../_common/components';

import CheckableAvatarEx from './Example';
import CheckableAvatarExCode from '!raw-loader!./Example';
import { parse } from 'react-docgen';
import CheckableAvatar from '!raw-loader!cyverse-ui/CheckableAvatar';
const meta = parse(CheckableAvatar);

class CheckableAvatarDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ 'CheckableAvatar Example' } >
                    <CheckableAvatarEx/>
                    <CodeBlock text={ CheckableAvatarExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default CheckableAvatarDoc;
