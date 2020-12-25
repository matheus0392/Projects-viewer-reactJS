import React from 'react';
import { useEffect, useState } from "react"
import PropTypes from 'prop-types';
//import onClickOutside from 'react-onclickoutside';
import { Animated } from 'react-animated-css';


const DropdownBox = (props) => {
    const [showing, setShowing] = useState(true);

    useEffect(() => { }, [])

    /*const handleClickOutside = () => {
        const { onClose } = props;
        onClose();
    }*/

    const {
        children,
        className,
        width,
        minWidth,
        style,
    } = props;

    return (
        <Animated
            animationIn="fadeIn"
            animationOut="fadeOut"
            isVisible={showing}
            animationInDuration={500}
            className={`box ${className}`}
            style={{ ...style, width, minWidth }}
        >
            {children}
        </Animated>

    );
}

DropdownBox.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    width: PropTypes.string,
    minWidth: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    style: PropTypes.objectOf(Map),
};

DropdownBox.defaultProps = {
    className: '',
    children: null,
    width: 'max-content',
    minWidth: '10rem',
    style: {},
};

export default DropdownBox//onClickOutside(DropdownBox);
