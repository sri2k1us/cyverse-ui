import React from 'react';
import { P } from 'cyverse-ui';
import { Figure } from '../components';
import CodeBlock from '../components/CodeBlock';
import Paper from 'material-ui/Paper';
import ThemeEx from './ThemeEx';
import ThemeColorsEx from './ThemeColorsEx';

const ThemeExList = [
    {
        name: "CyVerse Theme",
        desc: (
            <div>
                <P>
                    The <code className="CodeInline">cyverseTheme</code> is provided by the CyVerse-UI library and works with the Material-UI theme system to maintain a consistent "CyVerse look" across all applications using it.
                </P>
		<ThemeEx/>
            </div>
        ),
    },
    {
        name: "CyVerse Theme Colors",
        desc: (
            <div>
                <P>
                    The <code className="CodeInline">cyverseTheme</code> colors are part of a color system, encouraging proper contrast and consistency while enforcing the CyVerse band.
                </P>
                <P>
                    These colors can be overridden when initializing the Material-UI theme provider. See directions for this and installing the CyVerse theme below.
                </P>
                <Paper style={{ padding: "20px" }}>
                    <ThemeColorsEx/>
                </Paper>
            </div>
        ),
    },
    {
        name: "Installing CyVerse Theme",
        desc: (
            <div>
                <P>
                    To use the CyVerse theme we need to wrap our entire application in the Material-UI theme provider <code className="CodeInline">MuiThemeProvider</code> and initialize it with our custom CyVerse theme using "getMuiTheme" as our base theme. This will make the theme values available to all of the components.
                </P>
                <CodeBlock
                    text={
`import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import cyverseTheme from 'cyverse-ui/styles/cyverseTheme.json';
import MyApp from './MyApp';

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(cyverseTheme)}>
    <MyApp/>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);`
                    }
                />
            </div>
        ),
    },
    {
        name: "muiThemeable",
        desc: (
            <div>
                <P>
                    The <code className="CodeInline">cyverseTheme</code> values can be used by your app specific components using Material-UI's "muiThemeable" module. To use export "muiThemeable" passing your component as a second argument.  The theme object will be available to your component through it's <code className="CodeInline">props</code>.
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
});

export default muiThemeable()(ThemeColorsEx);`
                    }
                />
            </div>
        ),
    },
];

export default ThemeExList;
