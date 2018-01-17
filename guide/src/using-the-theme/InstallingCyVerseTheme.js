import React from 'react';
import { P } from 'cyverse-ui';
import { CodeBlock } from '../_common/components';

export default class InstallingCyVerseTheme extends React.Component {
    render() {
        return (
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
        )
    }
}
