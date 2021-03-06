import React, { PropsWithChildren } from "react";
import { HeadingPriority } from "../constants/heading-priority";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

export interface HeadingProps {
    cssClassName?: string;
    id?: string;
    priority?: HeadingPriority;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Component
// -----------------------------------------------------------------------------------------

const Heading: React.FC<HeadingProps> = (
    props: PropsWithChildren<HeadingProps>
) => {
    let cssClassNames: Array<any> = [];

    if (props.cssClassName) {
        cssClassNames.push(props.cssClassName);
    }

    let componentProps = {
        className: cssClassNames.join(" "),
    };

    return React.createElement(
        `h${props.priority ?? HeadingPriority.Two}`,
        componentProps,
        props.children
    );
};

// #endregion Component

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { Heading };

// #endregion Exports
