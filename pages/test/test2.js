import React from 'react'
import * as DGB from '/component/common/DGB';

export default function Test(props, ref) {
    props.init.current = function() {
        console.log("onload test2")
    }

    return (
        <>
            <a onClick={()=>{DGB.LocationBack("/")}}>home</a>
        </>
    )
}