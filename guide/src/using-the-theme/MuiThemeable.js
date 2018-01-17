import React from 'react';
import { P } from 'cyverse-ui';
import CodeBlock from '../components/CodeBlock';

export default class MuiThemeable extends React.Component {
    render() {
        return (
            <div>
                <P>
                    The <code className="CodeInline">cyverseTheme</code> values can be used by your app specific
                    components using Material-UI's "muiThemeable" module. To use export "muiThemeable" passing your
                    component as a second argument. The theme object will be available to your component through
                    it's <code className="CodeInline">props</code>.
                </P>
                <CodeBlock
                    text={
`import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

const ThemeColorsEx = React.createClass({
    render() {
        const {
            muiTheme: {
                palette: {
                    primary1Color,
                }
            }
        } = this.props;


        return (
            <div>
                <div
                    style={{
                        backgroundColor: primary1Color,
                        width: "75px",
                        height: "75px"
                    }}
                />
            </div>
        )
    }
}

export default muiThemeable()(ThemeColorsEx);`
                    }
                />
            </div>
        )
    }
}
