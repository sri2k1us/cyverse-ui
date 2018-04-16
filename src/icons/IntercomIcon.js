import React from "react";
import { SvgIcon } from "material-ui";

const IntercomIcon = ({ size = 24, style, ...rest }) => {
    return (
        <SvgIcon
            {...rest}
            style={{
                height: size,
                width: size,
                ...style,
            }}
            viewBox="0 0 24 24"
        >
            <path
                d="M16.8333333,3.0425 L6.125,3.0425 C5.04166667,3.0425 4.125,3.935 4.125,5.0825 L4.125,16.005 C4.125,17.11 5,18.045 6.125,18.045 L14.2916667,18.045 L18.8333333,20 L18.8333333,16.0475 L18.8333333,5.0825 C18.8333333,3.9775 17.9583333,3.0425 16.8333333,3.0425 Z M16.625,14.5175 C14.9166667,15.7925 13.2083333,16.2175 11.625,16.2175 C8.54166667,16.2175 6.16666667,14.56 6.125,14.5175 C5.83333333,14.305 5.79166667,13.9225 5.95833333,13.625 C6.16666667,13.3275 6.54166667,13.285 6.83333333,13.455 C7.04166667,13.5825 11.5416667,16.7275 15.875,13.455 C16.1666667,13.2425 16.5416667,13.285 16.75,13.5825 C17,13.88 16.9166667,14.305 16.625,14.5175 Z"
                id="path-1"
            />
        </SvgIcon>
    );
};

export default IntercomIcon;
