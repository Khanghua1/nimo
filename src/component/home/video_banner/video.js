import style from "./video.module.scss";
import { useEffect, useState } from 'react';
import bannerImage from './video/img.webp';
export default function Video() {

    //data Video 
    const dataVideos = [
        {
            content: "Helloooo",
            image: "https://web-ops.nimostatic.tv/banner/DECD33AA4B29E54405AD2E5068DA6AFE_a675f4a1d7c2d39aaa8aaa22ded88b29.jpg?t=1652937360000",
            id: "1",
            video: './video/vid2.mp4',
        },
        {
            content: "What's up Homies ?",
            image: "https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.6435-9/40387429_285102992219741_1434951769049268224_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=2g4vj-rrkMkAX9YGVuO&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT_tEuWkWcnaw7gU6t6FX1uh5_v-8actSAYEKeMQSIyc8Q&oe=62AEBA7E",
            id: "2",
            video: './video/vid3.mp4',
        },
        {
            content: "Aliciameow",
            image: "https://img.nimo.tv/o/banner/511423F8B6A61C2CAD4936335A72B6EE_ae6741f014b81320183a44abba3408af.jpg/l0/img.jpg",
            id: "3",
            video: './video/vid4.mp4',
        },
        {
            content: "Leo Top 1 Thách Đấu TFT Bắc Mỹ",
            image: "https://img.nimo.tv/o/banner/44F56AADDB52A5ED92686DF3459BDB8E_5cc9880c521662a060ed5f6c3cb38b94.jpg/l0/img.jpg",
            id: "4",
            video: './video/vid5.mp4',

        },
        {
            content: "Helloooo",
            image: "https://img.nimo.tv/o/banner/B0483EEB51FE8964F59658B583C2F26E_00d4af8b7456a56ba2895da3f44c4177.jpg/l0/img.jpg",
            id: "5",
            video: './video/vid6.mp4',

        },
        {
            content: "Xin đôi ba câu chuyện góp zuii🤪",
            image: "https://img.nimo.tv/o/banner/892AFBAC05BCBFF3FE612D12AE6C984_248a4587986ff668f3dfa3b80805bfad.jpg/l0/img.jpg",
            id: "6",
            video: './video/vid7.mp4',

        },
    ]
    //set Video
    const [video, setVideo] = useState('./video/vid2.mp4');
    //set Play video
    const [play, setPlay] = useState(true);
    // Range 50% initValue
    const [isRange, setIsRange] = useState(50);
    //remove active
    const removeActive = () => {
        const active = document.querySelector(`.${style.hover}`);
        active && active.classList.remove(`${style.hover}`);
    }
    // check id and set Video
    const changeVideo = (item) => {
        dataVideos.find(element => (
            item.parentElement.id === element.id ?
                setVideo(element.video) :
                undefined
        ))

    }
    //Add active element
    useEffect(() => {
        const active = document.querySelectorAll(`.${style.nimo__banner_video_content}`)
        active.forEach((item) => {
            item.addEventListener('click', function () {
                removeActive();
                this.classList.add(`${style.hover}`);
                changeVideo(this)
            })
        })
    })

    //reset video 
    const resetVid = () => {
        const vid = document.querySelector('#myVideo');
        vid.currentTime = 0;
    }
    //click start video
    const clickPlay = () => {
        const vid = document.querySelector('#myVideo');
        vid.paused ? vid.play() : vid.pause();
        setPlay(vid.paused)
    }
    //change range volume video
    const handleOnChange = (e) => {
        const vid = document.querySelector('#myVideo');
        setIsRange(e.target.value);
        vid.volume = isRange / 100 < .1 ? 0 : isRange / 100;
    }


    return (
        <div className={style.nimo__banner_group}>
            <a href="#!" className={style.nimo__banner_group_link}>
                <img alt="banner" src={bannerImage} />
            </a>
            <div className={style.nimo__banner_group_video}>
                <div className={style.nimo__banner_video} >
                    <div className={style.loadvideo}></div>
                    <video id='myVideo' autoPlay controls loop src={require(`${video}`)}></video>
                    <div className={style.nimo__banner_video_controls}>
                        <div className={style.controls__left}>
                            <div onClick={() => clickPlay()} className={style.controls__start} >

                                {play ? <svg id="start" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">)<path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" /></svg>
                                    : <svg id="pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M272 63.1l-32 0c-26.51 0-48 21.49-48 47.1v288c0 26.51 21.49 48 48 48L272 448c26.51 0 48-21.49 48-48v-288C320 85.49 298.5 63.1 272 63.1zM80 63.1l-32 0c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448l32 0c26.51 0 48-21.49 48-48v-288C128 85.49 106.5 63.1 80 63.1z" /></svg>
                                }

                            </div>
                            <div onClick={() => resetVid()} className={style.controls__reset} >

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M468.9 32.11c13.87 0 27.18 10.77 27.18 27.04v145.9c0 10.59-8.584 19.17-19.17 19.17h-145.7c-16.28 0-27.06-13.32-27.06-27.2c0-6.634 2.461-13.4 7.96-18.9l45.12-45.14c-28.22-23.14-63.85-36.64-101.3-36.64c-88.09 0-159.8 71.69-159.8 159.8S167.8 415.9 255.9 415.9c73.14 0 89.44-38.31 115.1-38.31c18.48 0 31.97 15.04 31.97 31.96c0 35.04-81.59 70.41-147 70.41c-123.4 0-223.9-100.5-223.9-223.9S132.6 32.44 256 32.44c54.6 0 106.2 20.39 146.4 55.26l47.6-47.63C455.5 34.57 462.3 32.11 468.9 32.11z" /></svg>
                            </div>
                        </div>
                        <div className={style.controls__right}>
                            <div className={style.controls__sound}>

                                {isRange < 2 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M301.2 34.85c-11.5-5.188-25.02-3.122-34.44 5.253L131.8 160H48c-26.51 0-48 21.49-48 47.1v95.1c0 26.51 21.49 47.1 48 47.1h83.84l134.9 119.9c5.984 5.312 13.58 8.094 21.26 8.094c4.438 0 8.972-.9375 13.17-2.844c11.5-5.156 18.82-16.56 18.82-29.16V64C319.1 51.41 312.7 40 301.2 34.85zM513.9 255.1l47.03-47.03c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0L480 222.1L432.1 175c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l47.03 47.03l-47.03 47.03c-9.375 9.375-9.375 24.56 0 33.94c9.373 9.373 24.56 9.381 33.94 0L480 289.9l47.03 47.03c9.373 9.373 24.56 9.381 33.94 0c9.375-9.375 9.375-24.56 0-33.94L513.9 255.1z" /></svg>
                                    : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M412.6 182c-10.28-8.334-25.41-6.867-33.75 3.402c-8.406 10.24-6.906 25.35 3.375 33.74C393.5 228.4 400 241.8 400 255.1c0 14.17-6.5 27.59-17.81 36.83c-10.28 8.396-11.78 23.5-3.375 33.74c4.719 5.806 11.62 8.802 18.56 8.802c5.344 0 10.75-1.779 15.19-5.399C435.1 311.5 448 284.6 448 255.1S435.1 200.4 412.6 182zM473.1 108.2c-10.22-8.334-25.34-6.898-33.78 3.34c-8.406 10.24-6.906 25.35 3.344 33.74C476.6 172.1 496 213.3 496 255.1s-19.44 82.1-53.31 110.7c-10.25 8.396-11.75 23.5-3.344 33.74c4.75 5.775 11.62 8.771 18.56 8.771c5.375 0 10.75-1.779 15.22-5.431C518.2 366.9 544 313 544 255.1S518.2 145 473.1 108.2zM534.4 33.4c-10.22-8.334-25.34-6.867-33.78 3.34c-8.406 10.24-6.906 25.35 3.344 33.74C559.9 116.3 592 183.9 592 255.1s-32.09 139.7-88.06 185.5c-10.25 8.396-11.75 23.5-3.344 33.74C505.3 481 512.2 484 519.2 484c5.375 0 10.75-1.779 15.22-5.431C601.5 423.6 640 342.5 640 255.1S601.5 88.34 534.4 33.4zM301.2 34.98c-11.5-5.181-25.01-3.076-34.43 5.29L131.8 160.1H48c-26.51 0-48 21.48-48 47.96v95.92c0 26.48 21.49 47.96 48 47.96h83.84l134.9 119.8C272.7 477 280.3 479.8 288 479.8c4.438 0 8.959-.9314 13.16-2.835C312.7 471.8 320 460.4 320 447.9V64.12C320 51.55 312.7 40.13 301.2 34.98z" /></svg>}
                                <div>
                                    <input onChange={e => handleOnChange(e)} id='range' min="1" max="100" value={isRange} type="range" />
                                    <span style={{ width: `${isRange}%` }} className={style.bar}></span>
                                </div>
                            </div>
                            <div className={style.controls__resolution}>
                                <span>480p</span>
                            </div>
                            <div className={style.controls__link}>
                                <a href="!#">Enter channel</a>
                            </div>
                        </div>

                    </div>
                </div>
                <ul className={style.nimo__banner_video_list}>
                    {dataVideos.map(video => (
                        <li id={video.id} key={video.id} className={style.nimo__banner_video_item}>
                            <div className={`${style.nimo__banner_video_content} ${style.active}`}>
                                <div className={`${style.nimo__banner_video_img} `}>
                                    <img src={video.image} alt={video.content} />
                                </div>
                                <div className={style.nimo__banner_video_text}>
                                    <span>{video.content}</span>
                                </div>
                                <div className={style.overlay}></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}