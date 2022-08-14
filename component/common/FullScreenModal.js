import * as React from 'react';
import * as DGB from '/component/common/DGB';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import {lazy, Suspense} from "react";
import Box from "@mui/material/Box";

export default function FullScreenModal(props, ref) {
    console.error(props)
    const handleClose = () => {
        DGB.CloseFullScreenDialog();
    };

    const PopupComponent = lazy(() => import('/pages/test/popup'));

    return (
        <div>
            <Dialog
                fullScreen
                open={props.isFullScreenOpen}
                onClose={handleClose}
                /*TransitionComponent={Transition}*/
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Sound
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            save
                        </Button>
                    </Toolbar>
                </AppBar>
                <Suspense fallback={<div>로딩 중. . .</div>}>
                    <Box component="main" sx={{ p: 3 }}>
                        <PopupComponent />
                    </Box>
                </Suspense>
            </Dialog>
        </div>
    )
}