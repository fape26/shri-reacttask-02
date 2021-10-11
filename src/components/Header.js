import React from 'react';


const Header = ({addCss, headerContent, children}) => {

    return (
        <div className={addCss ? "header" + " " + addCss : "header"}>
            <h2>{headerContent}</h2>
            {children}
        </div>
    )
}

export default Header