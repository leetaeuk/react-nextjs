import React, {useEffect, useRef, useState} from 'react';
import MainMenu from "/component/layout/MainMenu";
import Header from "/component/layout/Header";
import Footer from "/component/layout/Footer";
import DgbContents from "/component/layout/DgbContents";
import Modal from "/component/common/Modal";
import FullScreenModal from "/component/common/FullScreenModal";

import * as DGB from '/component/common/DGB';
import * as Global from '/component/common/Global';
import {RecoilRoot} from "recoil";

export default function App ({ Component, pageProps }) {
    const childFunc = useRef(null)
    const [isOpen, setOpen] = useState(false)
    const [isFullScreenOpen, setFullScreenOpen] = useState(false)

    // 뒤로가기 버튼 클릭시 이벤트 할당
    // 브라우저 뒤로가기자체 useEffect와 locationBack의 router시 각각 1번씩 총 2번 호출됨에 주의
    useEffect(() => {
        window.addEventListener('popstate', DGB.goBack);
        return () => {
            window.removeEventListener('popstate', DGB.goBack);
        }
    },[]);

    // 페이지 mounted 시 호출됨
    useEffect(() => {
        let currnetPath = location.pathname;

        console.error("뒤로가기여부 :: " + Global.getIsBack())
        if( Global.getIsBack() )
        {
            Global.setIsBack(false);
            return;
        }

        // 화면이 로드되는 시점에 pushState를 하여 브라우저 히스토리 생성
        history.pushState(null, '타이틀', currnetPath);

        Global.setProps({init:childFunc,modal:setOpen,fullscreenmodal:setFullScreenOpen});

        // mounted 처리후 child component의 init 함수호출
        childFunc.current();

        return() => {
            console.warn("unmounted 뒤로가기여부 :: " + Global.getIsBack());
            console.warn("unmounted path :: " + currnetPath);
        }
    });

    // 화면의 기본적인 레이아웃 처리
    return (
        <RecoilRoot>
            <Header></Header>
            <MainMenu></MainMenu>

            <DgbContents>
                <Component
                    {...pageProps}
                    init={childFunc}
                    modal={setOpen}
                    fullscreenmodal={setFullScreenOpen}
                >
                </Component>
            </DgbContents>

            <Footer></Footer>

            <Modal isOpen={isOpen}></Modal>
            <FullScreenModal isFullScreenOpen={isFullScreenOpen}></FullScreenModal>
        </RecoilRoot>
    )
}