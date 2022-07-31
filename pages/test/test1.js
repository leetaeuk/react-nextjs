import React from 'react'
import * as DGB from '/component/common/DGB';

export default function Test(props, ref) {
    props.init.current = function() {
        console.log("onload test1")
    }

    return (
        <>
            <a onClick={()=>{DGB.Location("/test/test2", {data:"test2"})}}>test2</a>
        </>
    )
}