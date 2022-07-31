import React, {useEffect, useRef} from "react";

export default function DgbContents ({ children, pageProps }) {
    // 페이지 mounted 시 호출됨
    // 화면의 기본적인 레이아웃 처리
    return (
        <main className="contents">{children}</main>
    )
}