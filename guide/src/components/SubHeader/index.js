import React from 'react';
import { P } from 'cyverse-ui';
import { Figure } from '../../_common/components';
import ComponentDoc from '../../_common/components/ComponentDoc';
import CodeBlock from '../../_common/components/CodeBlock';

import SubHeaderEx from './SubHeaderEx';
import SubHeaderExCode from '!raw-loader!./SubHeaderEx';

import { parse } from 'react-docgen';
import SubHeader from '!raw-loader!cyverse-ui/SubHeader';
const meta = parse(SubHeader);

class SubHeaderDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ `SubHeader Example` } >
                    <SubHeaderEx/>
                    <CodeBlock text={ SubHeaderExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default SubHeaderDoc;
