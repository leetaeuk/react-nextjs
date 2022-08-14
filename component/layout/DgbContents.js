import React from "react";
import Box from "@mui/material/Box";
import Toolbar from '@mui/material/Toolbar';

export default function DgbContents ({ children, pageProps }) {
    // 페이지 mounted 시 호출됨
    // 화면의 기본적인 레이아웃 처리

    return (
        <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
            {children}
        </Box>
    )
}