import React from 'react';
import { P } from 'cyverse-ui';
import ThemeEx from './ThemeEx';

export default class CyVerseTheme extends React.Component {
    render() {
        return (
            <div>
                <P>
                    The <code className="CodeInline">cyverseTheme</code> is provided by the CyVerse-UI library and works with the Material-UI theme system to maintain a consistent "CyVerse look" across all applications using it.
                </P>
                <ThemeEx/>
            </div>
        );
    }
}
