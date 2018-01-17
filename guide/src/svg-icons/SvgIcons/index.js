import React from 'react';
import R from 'ramda';
import {  Hr, P, Title, Div, Section } from 'cyverse-ui';
import * as icons from 'cyverse-ui/icons';

import theme from '../../theme';
import { Figure, CodeBlock } from '../../_common/components';
import IconEx from './Example';
import IconExCode from '!raw-loader!./Example';

class IconSection extends React.Component {
    IconCell = (icon) => {
        const Icon = icon[1];
        const style = {
            cell: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "150px",
                height: "150px"
            }
        }
        return (
            <Div
                key={ icon[0] }
                style={style.cell}
            >
                <Div mb={3}>
                    <Icon size={ 50 }/>
                </Div>
                <P>
                    { icon[0] }
                </P>
            </Div>
        );
    };

    render() {
        return (
            <Section>
                <Title
                    h2
                    display1
                    color={ theme.color.primary }
                >
                    SVG Icons
                </Title>
                <Div mb={ 5 }>
                    <P>
                        SVG Icons are an extension to the material-ui svg icons. They can be used in all material-ui components that take an icon as a prop or children.
                    </P>
                    <Figure
                        caption={ `SVG Icon Example` }
                        color={ theme.color.primary }
                    >
                        <IconEx/>
                        <CodeBlock
                            style={{
                                overflow: "scroll",
                            }}
                            text={ IconExCode }
                        />
                    </Figure>
                </Div>
                <Title
                    h3
                    title
                >
                    Icon List
                </Title>
                <Div style={{ display: "flex", flexWrap: "wrap" }}>
                    { R.toPairs(icons).map(this.IconCell) }
                </Div>
            </Section>
        );
    }
}

export default IconSection
