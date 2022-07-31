import React from 'react'
import * as DGB from '/component/common/DGB';

export default function Test(props, ref) {
    props.init.current = function() {
        console.log("onload test")
    }

    return (
        <>
            <a onClick={()=>{DGB.Location("/test/test1", {data:"test1"})}}>test1</a>
        </>
    )
}