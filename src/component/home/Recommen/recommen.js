import style from "./recommen.module.scss"
import { useEffect, useState, useRef, memo } from "react"


const listImage = [
    {
        id: "1",
        src: "https://img.nimo.tv/o/banner/C7FA042B12812FD82EB3A487B532226C_34925d21d7f73e4cebfc7bd5f9e1020a.jpg/w999_l0/img.jpg"
    },
    {
        id: "2",
        src: "https://img.nimo.tv/o/banner/320002EE694ABE27006D2A05D9B48397_5b818d3be54e38f3e1d0623dd8ee201b.jpg/w999_l0/img.jpg"
    },
    {
        id: "3",
        src: "https://img.nimo.tv/o/banner/3885C3C9C57E16FEDA1B6FE6D9E4DBE1_e500ece4c2b9b406b952936bc7c6f4f2.jpg/w999_l0/img.jpg"
    },
    {
        id: "4",
        src: "https://img.nimo.tv/o/banner/3AAC7E9F368D7B0ADA63A1AD2FAC65FD_bd4bc2422781b608a7aa72a7be776293.jpg/w999_l0/img.jpg"
    },
    {
        id: "5",
        src: "https://img.nimo.tv/o/banner/3E3CCCC9DD8C7249FBC4CE8C151EF718_bd4bc2422781b608a7aa72a7be776293.jpg/w999_l0/img.jpg"
    },
]
const listEsport = [
    {
        id: '1',
        name: 'MSI',
        game: 'League of Legend',
        time: 'May 27, 3:00 PM',
        team1: 'RNG',
        logoteam1: 'https://img.nimo.tv/o/banner/64B8B8F81B7C945BCD6AD486850F2B5D_f21fb6cd5ae852959a179f9930c6b63e.png/w120_l0/img.png',
        team2: 'Evil Geniuses',
        logoteam2: 'https://img.nimo.tv/o/banner/DFDFDCA7CAB9C4B1293B001F90D43D88_30b6fb3ebb28f20a060829327ad667ff.png/w120_l0/img.png',
        img: 'https://img.nimo.tv/o/banner/F97C0DB52885ABFA851D4DE2D470F204_ddbb2c7f49bdedffc4087cc5981351b6.png/w640_l0/img.png',
    },
    {
        id: '2',
        name: 'LPL',
        game: 'League of Legend',
        time: 'May 28, 3:00 PM',
        team1: 'TES',
        logoteam1: 'https://img.nimo.tv/o/banner/2ADD01148A78909C2B7AD65268997636_128.png/w120_l0/img.png',
        team2: 'RNG',
        logoteam2: 'https://img.nimo.tv/o/banner/64B8B8F81B7C945BCD6AD486850F2B5D_f21fb6cd5ae852959a179f9930c6b63e.png/w120_l0/img.png',
        img: 'https://img.nimo.tv/o/banner/16111834E22CCA8769F0214111DC1F_cc09c3cc3da7f851112bd4956ab3bb5a.png/w640_l0/img.png',
    },
]
function Recommen() {

    const list = useRef();
    const [index, setIndex] = useState(0);
    const slideData = listImage.length;
    const listEsportI = useRef()
    const next = useRef()
    const prev = useRef()

    const removeActive = () => {
        const active = document.querySelector(`.${style.active}`);
        active.classList.remove(style.active);
    }
    useEffect(() => {
        const dot = document.querySelectorAll(`.${style.dots} li`);
        dot.forEach((item, indexNew) => {
            item.addEventListener('mouseover', function () {
                removeActive();
                setIndex(indexNew)
                list.current.style.transform = `tranlateX(-${528 * index})`;
                item.classList.add(style.active);
            })
        })
        return () => { }
    }, [index])

    // index : 0 1 2 3 4 
    // slideData : 5


    const Next = () => {

        setIndex(index < slideData - 1 ? index + 1 : 0)

    }

    const Prev = () => {

        setIndex(index === 0 ? slideData - 1 : index - 1)
    }
    
    useEffect(()=>{

        next.current.addEventListener('click',function(){
            listEsportI.current.style.transform = "translateX(-333px)";
        })
        prev.current.addEventListener('click',function(){
            listEsportI.current.style.transform = "translateX(0px)";
            
        })
        console.log(prev.current);
    },[])

    return (
        <div className={style.recommen}>
            <div className={style.recommen__left}>
                <div className={style.recommen__left_header}>
                    <h1>Recommended</h1>
                    <div className={style.recommen__left_logo}>
                        <span onClick={Prev}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" /></svg></span>
                        <span onClick={Next}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" /></svg></span>
                    </div>
                </div>
                <div className={style.recommen__left_group}>
                    <div className={style.recommen__left_slide}>
                        <ul ref={list} style={{ transform: `translateX(-${index * 528}px)` }} className={style.recommen__left_list}>
                            {listImage.map(item => (
                                <li key={item.id} className={style.recommen__left_item}>
                                    <a href="#!" className={style.recommen__left_link}>
                                        <img src={item.src} alt='' />
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <ul className={style.dots}>
                            <li className={style.active}></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className={style.recommen__left_image}>
                        <div>
                            <img src='https://img.nimo.tv/o/banner/169A85C6A78F3BE84D0DE9934425FF76_263a81506be7ff212191f517559d0c7e.jpg/w600_l0/img.jpg' alt='' />
                        </div>
                        <div>
                            <img src='https://img.nimo.tv/o/banner/110CB34A37E9A8516D9821D418478845_6d0bb4a8212f32f74cdd138f74c08888.jpg/w600_l0/img.jpg' alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.recommen__right}>

                <div className={style.recommen__right_header}>

                    <h1>Esports Events</h1>
                    <div className={style.recommen__right_logo}>
                        <span ref={prev}><svg id="prev_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" /></svg></span>
                        <span ref={next}><svg id="next_"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" /></svg></span>
                    </div>
                </div>

                <div className={style.recommen__right_slide}>
                    <div className={style.recommen__right_slide_container}>

                        <ul style={{transform: "tranlateX(0px)"}} ref={listEsportI} className={style.recommen__right_slide_list}>

                            {listEsport.map((item) => (
                                <li key={item.id} className={style.recommen__right_item}>

                                    <a className={style.recommen__right_link} href="#!">
                                        <div className={style.recommen__right_item_group_image}>

                                            <img src={item.img} alt="" />

                                            <div>
                                                <span>{item.name}</span>
                                            </div>
                                            <button>{item.game}</button>
                                        </div>
                                    </a>

                                    <div className={style.recommen__right_item_card}>
                                        <div className={style.recommen__right_item_card_header}>
                                            <span>{item.time}</span>
                                        </div>
                                        <div className={style.recommen__right_item_card_body}>

                                            <div className={style.recommen__right_item_card_body_1}>
                                                <img src={item.logoteam1} alt="" />
                                                <span>{item.team1}</span>
                                            </div>

                                            <div className={style.recommen__right_item_card_body_2}>
                                                <span>VS</span>
                                                <button>Subscribe</button>
                                            </div>

                                            <div className={style.recommen__right_item_card_body_3}>
                                                <img src={item.logoteam2} alt="" />
                                                <span>{item.team2}</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default memo(Recommen)