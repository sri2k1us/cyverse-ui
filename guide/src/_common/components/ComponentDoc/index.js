import React from "react";
import R from "ramda";
import { Hr, P, Title, Div, Section } from "cyverse-ui";
import MDBlock from './MDBlock';
import theme from "../../../theme";

class ComponentDoc extends React.Component {
    tableData = prop => {
        const defaultValue = prop[1].defaultValue;
        const renderDefault = defaultValue ? defaultValue.value : "";
        return (
            <tr key={prop[0]}>
                <td>{prop[0]}</td>
                <td>
                    <code>{prop[1].type.name}</code>
                </td>
                <td>
                    <code>{renderDefault}</code>
                </td>
                <td>{prop[1].description}</td>
            </tr>
        );
    };

    render() {
        const { meta, children } = this.props;
        const { description, displayName } = meta;
        const anchorId = displayName
            .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
            .replace(
                /([A-Z])/g,
                ([letter]) => `-${letter.toLowerCase()}`
            );

        return (
            <Section key={displayName}>
                <Title h1 headline color={theme.color.primary}>
                    {displayName}
                </Title>
                <MDBlock text={description} />
                <Div mb={4}>{children}</Div>
                <Div>
                    <Title h2 title>
                        {`${displayName} Properties`}
                    </Title>
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Type</td>
                                <td>Default</td>
                                <td>Description</td>
                            </tr>
                        </thead>
                        <tbody>
                            {R.toPairs(meta.props).map(
                                this.tableData
                            )}
                        </tbody>
                    </table>
                </Div>
            </Section>
        );
    }
}

export default ComponentDoc;
