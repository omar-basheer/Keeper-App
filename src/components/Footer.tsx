import React from "react"

function Footer(){
    const date = new Date();
    const year = date.getFullYear();
    // console.log(year);

    return(
        <footer>
            <p>
                Copyright © {year}. Omar Keeper. All rights reserved
            </p>
        </footer>
    )
}

export default Footer;