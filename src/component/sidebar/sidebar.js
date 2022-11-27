import style from "./sidebar.module.scss";
import { useState } from "react";
import Side from "./side/side";

const listIcon = [
    {
        id: "1",
        url: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM349.8 349.8c5.594 12.03 .4375 26.31-11.56 31.94c-3.312 1.531-6.75 2.25-10.19 2.25c-9 0-17.66-5.125-21.75-13.81l-38.46-82.19H208v72c0 13.25-10.75 24-24 24s-24-10.75-24-24V152c0-13.25 10.75-24 24-24l88 .0044c44.13 0 80 35.88 80 80c0 28.32-14.87 53.09-37.12 67.31L349.8 349.8zM272 176h-64v64h64c17.66 0 32-14.34 32-32S289.7 176 272 176z" /></svg>
    },
    {
        id: "2",
        url: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M406.1 61.65C415.4 63.09 419.4 74.59 412.6 81.41L374.6 118.1L383.6 170.1C384.1 179.5 375.3 186.7 366.7 182.4L320.2 157.9L273.3 182.7C264.7 187 255 179.8 256.4 170.5L265.4 118.4L227.4 81.41C220.6 74.59 224.6 63.09 233.9 61.65L286.2 54.11L309.8 6.332C314.1-2.289 326.3-1.93 330.2 6.332L353.8 54.11L406.1 61.65zM384 256C401.7 256 416 270.3 416 288V480C416 497.7 401.7 512 384 512H256C238.3 512 224 497.7 224 480V288C224 270.3 238.3 256 256 256H384zM160 320C177.7 320 192 334.3 192 352V480C192 497.7 177.7 512 160 512H32C14.33 512 0 497.7 0 480V352C0 334.3 14.33 320 32 320H160zM448 416C448 398.3 462.3 384 480 384H608C625.7 384 640 398.3 640 416V480C640 497.7 625.7 512 608 512H480C462.3 512 448 497.7 448 480V416z" /></svg>,
    },
    {
        id: "3",
        url: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M288 358.3c13.98-8.088 17.53-30.04 28.88-41.39c11.35-11.35 33.3-14.88 41.39-28.87c7.98-13.79 .1658-34.54 4.373-50.29C366.7 222.5 383.1 208.5 383.1 192c0-16.5-17.27-30.52-21.34-45.73c-4.207-15.75 3.612-36.5-4.365-50.29c-8.086-13.98-30.03-17.52-41.38-28.87c-11.35-11.35-14.89-33.3-28.87-41.39c-13.79-7.979-34.54-.1637-50.29-4.375C222.5 17.27 208.5 0 192 0C175.5 0 161.5 17.27 146.3 21.34C130.5 25.54 109.8 17.73 95.98 25.7C82 33.79 78.46 55.74 67.11 67.08C55.77 78.43 33.81 81.97 25.72 95.95C17.74 109.7 25.56 130.5 21.35 146.2C17.27 161.5 .0008 175.5 .0008 192c0 16.5 17.27 30.52 21.34 45.73c4.207 15.75-3.615 36.5 4.361 50.29C33.8 302 55.74 305.5 67.08 316.9c11.35 11.35 14.89 33.3 28.88 41.4c13.79 7.979 34.53 .1582 50.28 4.369C161.5 366.7 175.5 384 192 384c16.5 0 30.52-17.27 45.74-21.34C253.5 358.5 274.2 366.3 288 358.3zM112 192c0-44.27 35.81-80 80-80s80 35.73 80 80c0 44.17-35.81 80-80 80S112 236.2 112 192zM1.719 433.2c-3.25 8.188-1.781 17.48 3.875 24.25c5.656 6.75 14.53 9.898 23.12 8.148l45.19-9.035l21.43 42.27C99.46 507 107.6 512 116.7 512c.3438 0 .6641-.0117 1.008-.0273c9.5-.375 17.65-6.082 21.24-14.88l33.58-82.08c-53.71-4.639-102-28.12-138.2-63.95L1.719 433.2zM349.6 351.1c-36.15 35.83-84.45 59.31-138.2 63.95l33.58 82.08c3.594 8.797 11.74 14.5 21.24 14.88C266.6 511.1 266.1 512 267.3 512c9.094 0 17.23-4.973 21.35-13.14l21.43-42.28l45.19 9.035c8.594 1.75 17.47-1.398 23.12-8.148c5.656-6.766 7.125-16.06 3.875-24.25L349.6 351.1z" /></svg>,
    },
    {
        id: "4",
        url: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M320 0H64C37.5 0 16 21.5 16 48v416C16 490.5 37.5 512 64 512h256c26.5 0 48-21.5 48-48v-416C368 21.5 346.5 0 320 0zM240 447.1C240 456.8 232.8 464 224 464H159.1C151.2 464 144 456.8 144 448S151.2 432 160 432h64C232.8 432 240 439.2 240 447.1z" /></svg>,
    },
    {
        id: "5",
        url: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528 0h-480C21.5 0 0 21.5 0 48v320C0 394.5 21.5 416 48 416h192L224 464H152C138.8 464 128 474.8 128 488S138.8 512 152 512h272c13.25 0 24-10.75 24-24s-10.75-24-24-24H352L336 416h192c26.5 0 48-21.5 48-48v-320C576 21.5 554.5 0 528 0zM512 352H64V64h448V352z" /></svg>
    },
    {
        id: "6",
        url: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M160 320h12v16c0 8.875 7.125 16 16 16h40c8.875 0 16-7.125 16-16V320H256c17.62 0 32-14.38 32-32V64c0-17.62-14.38-32-32-32V16C256 7.125 248.9 0 240 0h-64C167.1 0 160 7.125 160 16V32C142.4 32 128 46.38 128 64v224C128 305.6 142.4 320 160 320zM464 448h-1.25C493.2 414 512 369.2 512 320c0-105.9-86.13-192-192-192v64c70.63 0 128 57.38 128 128s-57.38 128-128 128H48C21.5 448 0 469.5 0 496C0 504.9 7.125 512 16 512h480c8.875 0 16-7.125 16-16C512 469.5 490.5 448 464 448zM104 416h208c4.375 0 8-3.625 8-8v-16c0-4.375-3.625-8-8-8h-208C99.63 384 96 387.6 96 392v16C96 412.4 99.63 416 104 416z" /></svg>,
    },
]

function SideBar() {

    const [show, setShow] = useState(true)

    const showSideBar = () => {
        
        setShow(show ? false : true)

    }



    return (
        <div className={`${show ? style.main : style.active}`}>
            <ul className={style.list}>
                {show ?
                    <div className={style.scroll}>
                        <div className={style.expand_item}>

                            <img src="//www.nimo.tv/nms/images/sidebar-logo.2818872baaf842ab17d2e63fa190fe1f.png" alt="" />
                            <div className={style.content}>
                                <h4>Join Nimo</h4>
                                <p>Explore the world's best live streams!</p>
                                <button>Sign Up</button>
                            </div>

                        </div>
                        <div className={style.expand_item}>

                            <img src="//www.nimo.tv/nms/images/sidebar-logo.2818872baaf842ab17d2e63fa190fe1f.png" alt="" />
                            <div className={style.content}>
                                <h4>Join Nimo</h4>
                                <p>Explore the world's best live streams!</p>
                                <button>Sign Up</button>
                            </div>

                        </div>
                        <div className={style.expand_item}>

                            <img src="//www.nimo.tv/nms/images/sidebar-logo.2818872baaf842ab17d2e63fa190fe1f.png" alt="" />
                            <div className={style.content}>
                                <h4>Join Nimo !</h4>
                                <p>Explore the world's best live streams!</p>
                                <button>Sign Up</button>
                            </div>

                        </div>

                        <div className={style.bottom_container}>
                            <div className={style.bottom_group}>
                                <span>Dowload App</span>
                                <div className={style.bottom_image}>
                                    <img src="//www.nimo.tv/nms/images/qrcodeNimotv_new.b65f3ae8294194d7cb5f74d26373b7c8.png" alt="" />
                                    <div className={style.bot}>

                                    </div>
                                </div>
                                <p>Top live streaming platform</p>
                            </div>
                            <div className={style.btn}>
                                <button>Go Live</button>
                            </div>

                        </div>
                    </div> :
                    <Side
                        list={listIcon}
                    />
                }
                {show ? <img onClick={() => showSideBar()} className={style.icon_display} src="https://www.nimo.tv/nms/images/arrow-collapse.d1e5700e9b24870dca85a5a7ab555478.png" alt="" /> :
                        <img onClick={() => showSideBar()} className={style.icon_display_two} src="https://www.nimo.tv/nms/images/arrow-expand.cb28e2276f23022af95348e938e99fb6.png" alt="" />}
            </ul>
        </div>
    )
}

export default SideBar;