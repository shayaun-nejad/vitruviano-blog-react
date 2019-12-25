import React from "react";
import PropTypes from 'prop-types';
import MuiButton from "@material-ui/core/Button";

/** Button 
  * Based on https://material-ui.com/api/button/
  */
const Button = (props) => {
    const {children, ...other} = props;
    return (
        <MuiButton {...other}>
            {children}
        </MuiButton>
    );
};

Button.propTypes = {
    /** The content of the button. */
    children: PropTypes.node.isRequired,
    /** The CSS className of the component. */
    className: PropTypes.string,
    /** The color of the component. It's using the theme palette when that makes sense. */
    color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     * The default value is a `button`.
     */
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    /** If `true`, the button will be disabled. */
    disabled: PropTypes.bool,
    /**
     * If `true`, the  keyboard focus ripple will be disabled.
     * `disableRipple` must also be true.
     */
    disableFocusRipple: PropTypes.bool,
    /** If `true`, the ripple effect will be disabled. */
    disableRipple: PropTypes.bool,
    focusVisibleClassName: PropTypes.string,
    /** If `true`, the button will take up the full width of its container. */
    fullWidth: PropTypes.bool,
    /**
     * The URL to link to when the button is clicked.
     * If defined, an `a` element will be used as the root node.
     */
    href: PropTypes.string,
    /**
     * If `true`, and `variant` is `'fab'`, will use mini floating action button styling.
     */
    mini: PropTypes.bool,
    /**
     * The size of the button.
     * `small` is equivalent to the dense button styling.
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    type: PropTypes.string,
    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
};

Button.defaultProps = {
    color: 'default',
    component: 'button',
    disabled: false,
    disableFocusRipple: false,
    fullWidth: false,
    mini: false,
    size: 'medium',
    type: 'button',
    variant: 'text',
};

export default Button;
