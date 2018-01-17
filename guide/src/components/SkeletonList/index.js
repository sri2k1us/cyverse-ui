import React from 'react';
import { P } from 'cyverse-ui';
import { Figure } from '../../_common/components';
import ComponentDoc from '../../_common/components/ComponentDoc';
import CodeBlock from '../../_common/components/CodeBlock';

import SkeletonListEx from './SkeletonListEx';
import SkeletonListExCode from '!raw-loader!./SkeletonListEx';

import { parse } from 'react-docgen';
import SkeletonList from '!raw-loader!cyverse-ui/SkeletonList';
const meta = parse(SkeletonList);

class SkeletonListDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ `SkeletonList Example` } >
                    <SkeletonListEx/>
                    <CodeBlock text={ SkeletonListExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default SkeletonListDoc;
