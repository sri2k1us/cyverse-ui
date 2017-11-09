import React from "react";
import InformationIcon from "material-ui/svg-icons/action/info";
import WarningIcon from "material-ui/svg-icons/alert/warning";
import P from "./P";
import { marg } from "./styles";

/**
 * The InfoBlock is used everywhere information is displayed to the user that isn't part of an input or title. Usually at the top of a view to explain the purpose of said view. The icon helps isolate the information from the UI.
 */
export default React.createClass({

    displayName: "InfoBlock",

    propTypes: {
        /**
         * The information text that will be displayed.
         */
        text: React.PropTypes.string,
        /**
         * Show the warning icon over the default info icon
         */
        warning: React.PropTypes.bool,
    },

    getDefaultProps() {
        return {
            warning: false,
        };
    },

    icon() {
        const { warning } = this.props;
        if (warning) {
            return (
                <WarningIcon
                    style={marg({ mr: 3})}
                />
            )
        }
        return (
            <InformationIcon
                style={marg({ mr: 3})}
            />
        )
    },

    render() {
        return (
            <div
                style={{
                    display: "flex",
                    ...marg(this.props)
                }}
            > 
                { this.icon() }
                <P mb={ 0 }>
                    { this.props.text }
                </P>
            </div>
        )
    }
});