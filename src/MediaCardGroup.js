import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import Scroll from "react-scroll";
import Stagger from "react-css-stagger";

const AnimationStyle = () => (
    <style>
        {`
        .CY-MediaCard__animation-enter {
            opacity: 0;
            transform: translate(0,10px);
            transition:  opacity .2s ease, transform .2s ease !important;
        }

        .CY-MediaCard__animation-enter-active {
            opacity: 1;
            transform: translate(0,0);
        }
    `}
    </style>
);

// Init scroll
const scroll = Scroll.animateScroll;

/**
 * MediaCardGroup is a wrapper for MediaCards that helps to manage opening and closing, scroll animation, and stagger animation of MediaCards as children.
 */
class MediaCardGroup extends React.Component {
    static displayName = "MediaCardGroup";

    static propTypes = {
        /**
         * If true the stagger animation is enabled
         */
        stagger: PropTypes.bool,
        /**
         * If true auto scrolling when card is expaned is disabled
         */
        noScroll: PropTypes.bool,
    };

    static defaultProps = {
        stagger: false,
        noScroll: false,
    };

    state = {
        expanded: null,
    };

    componentDidMount() {
        document.addEventListener(
            "click",
            this.handleDocumentClick,
            false
        );
    }

    componentWillUnmount() {
        document.removeEventListener(
            "click",
            this.handleDocumentClick,
            false
        );
    }

    handleDocumentClick = e => {
        let cards = this.refs.root;
        if (!cards.contains(e.target)) {
            this.setState({ expanded: null });
        }
    };

    onExpand = el => {
        let scrollAmount = this.state.expanded ? -40 : 40;
        if (!this.props.noScroll) {
            setTimeout(() => {
                scroll.scrollMore(scrollAmount, {
                    duration: 60,
                });
            }, 1);
        }
        let expanded = this.state.expanded === el ? null : el;
        this.setState({
            expanded,
        });
    };

    render() {
        const { className, stagger, children } = this.props;
        const { expanded } = this.state;
        const wrapperClasses = classnames(
            { [className]: className },
            "CY-MediaCardGroup"
        );
        const renderChildren = React.Children.map(children, child =>
            React.cloneElement(child, {
                onExpand: this.onExpand.bind(this, child),
                isExpanded: expanded
                    ? expanded.key === child.key
                    : false,
            })
        );

        const renderList = stagger ? (
            <Stagger transition="CY-MediaCard__animation" delay={70}>
                {children}
            </Stagger>
        ) : (
            renderChildren
        );

        return (
            <div ref="root" className={wrapperClasses}>
                {renderList}
                <AnimationStyle />
            </div>
        );
    }
}

export default MediaCardGroup;
