import React from 'react'
import * as DGB from '/component/common/DGB';

export default function Index(props, ref) {
    props.init.current = function() {
        console.log("onload index")
    }

    return (
        <>
            <a onClick={()=>{DGB.Location("/test/test", {data:"test"})}}>first</a>
            <a onClick={()=>{DGB.Location("/test/test", {data:"test"})}}>test</a>
            <a onClick={()=>{DGB.Location("/test/test", {data:"test"})}}>test</a>
            <a onClick={()=>{DGB.Location("/test/test", {data:"test"})}}>test</a>
            <a onClick={()=>{DGB.Location("/test/test", {data:"test"})}}>test</a>
            <a onClick={()=>{DGB.Location("/test/test", {data:"test"})}}>test</a>
            <a onClick={()=>{DGB.Location("/test/test", {data:"test"})}}>test</a>
            <a onClick={()=>{DGB.Location("/test/test", {data:"test"})}}>test</a>
            <a onClick={()=>{DGB.Location("/test/test", {data:"test"})}}>test</a>
            <a onClick={()=>{DGB.Location("/test/test", {data:"test"})}}>test</a>
            <a onClick={()=>{DGB.Location("/test/test", {data:"test"})}}>test</a>
            <a onClick={()=>{DGB.Location("/test/test", {data:"test"})}}>test</a>
            <a onClick={()=>{DGB.Location("/test/test", {data:"test"})}}>test</a>
            <a onClick={()=>{DGB.Location("/test/test", {data:"test"})}}>test</a>
            <a onClick={()=>{DGB.Location("/test/test", {data:"test"})}}>test</a>
            <a onClick={()=>{DGB.Location("/test/test", {data:"test"})}}>test</a>
            <a onClick={()=>{DGB.Location("/test/test", {data:"test"})}}>test</a>
            <a onClick={()=>{DGB.Location("/test/test", {data:"test"})}}>test</a>
            <a onClick={()=>{DGB.Location("/test/test", {data:"test"})}}>test</a>
            <a onClick={()=>{DGB.Location("/test/test", {data:"test"})}}>test</a>
            <a onClick={()=>{DGB.Location("/test/test", {data:"test"})}}>test</a>
            <a onClick={()=>{DGB.Location("/test/test", {data:"test"})}}>test</a>
            <a onClick={()=>{DGB.Location("/test/test", {data:"test"})}}>test</a>
            <a onClick={()=>{DGB.Location("/test/test", {data:"test"})}}>test</a>
            <a onClick={()=>{DGB.Location("/test/test", {data:"test"})}}>test</a>
            <a onClick={()=>{DGB.Location("/test/test", {data:"test"})}}>end</a>
        </>
    );
}