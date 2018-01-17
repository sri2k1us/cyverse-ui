import React from 'react';
import { P } from 'cyverse-ui';
import Paper from 'material-ui/Paper';
import ThemeColorsEx from './ThemeColorsEx';

export default class CyVerseThemeColors extends React.Component {
    render() {
        return (
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
        )
    }
}
