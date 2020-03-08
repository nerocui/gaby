import React from 'react';
import useStyle from '../../style/HeaderStyle';
import Lottie from 'react-lottie';
import * as menuAnimationDate from '../../data/menu.json';

const Header = (props: any) => {
    const classes = useStyle();

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: menuAnimationDate,
    };

    return (
        <div className={classes.root}>
            <div className={classes.hamburgerContainer}>
                <Lottie
                    options={defaultOptions}
                    isPaused={false}
                    isStopped={false}/>
            </div>
        </div>
    );
};

export default Header;
