import { create as createJss } from 'jss';
import preset from 'jss-preset-default';
import { createStyleManager, createStyleSheet } from 'jss-theme-reactor';

export default theme => createStyleManager({
        jss: createJss(preset()),
        theme,
    });
