import React, {useRef, useState} from 'react'
import * as DGB from '/component/common/DGB';
import {OpenFullScreenDialog} from "../component/common/DGB";

export default function Index(props, ref) {
    props.init.current = function() {
        console.log("onload index")
    }

    return (
        <>
            <a onClick={()=>{DGB.Location("/test/test", {data:"test"})}}>test</a>
            <br/>
            <a onClick={()=>{DGB.OpenDialog();}}>dialog</a>
            <br/>
            <a onClick={()=>{DGB.OpenFullScreenDialog();}}>fullscreen modal</a>
        </>
    );
}