import { getCurrentWindow } from "@tauri-apps/api/window";
import { CheckBoxOutlineBlank, Close, HorizontalRule } from "@mui/icons-material";
import { Typography } from "@mui/joy";
import "./TitleBar.css";


const appWindow = getCurrentWindow();
// const iconFontSize = "small";

function TitleBar() {
    return (
        <div data-tauri-drag-region className="titlebar">
            <div className="titlebar-container">
                <div className="titlebar-app-title">
                    <Typography level="title-md">Storm</Typography>
                </div>
                <div className="titlebar-nav"></div>
            </div>
            <div className="titlebar-container">
                <div className="titlebar-button" id="titlebar-minimize" onClick={onMinimize}>
                    <HorizontalRule fontSize="inherit" className="title-window-control-buttons" />
                </div>
                <div className="titlebar-button" id="titlebar-maximize" onClick={onMaximize}>
                    <CheckBoxOutlineBlank fontSize="inherit" className="title-window-control-buttons" />
                </div>
                <div className="titlebar-button title-button-close" id="titlebar-close" onClick={onClose}>
                    <Close fontSize="inherit" className="title-window-control-buttons" />
                </div>
            </div>
        </div>
    )
}

function onClose() {
    console.log("Close button clicked");
    appWindow.close();
}

function onMinimize() {
    console.log("Minimize button clicked");
    appWindow.minimize();
}

function onMaximize() {
    // Check if the window is maximized
    appWindow.isMaximized().then((maximized) => {
        console.log("Maximize button clicked");
        if (maximized) {
            appWindow.unmaximize();
        } else {
            appWindow.maximize();
        }
    });
}

export default TitleBar;