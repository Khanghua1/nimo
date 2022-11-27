import style from "./topgame.module.scss"


const listSlides = [
    {
        id: '1',
        name: 'Liveshow',
        viewer: '57',
        label: 'Others',
        image: 'https://img.nimo.tv/o/banner/7644B1A8F5A0B1D65F4236AD87F5F637_286febde2064453836cff5aaa33ce1b3.jpg/w256_l0/img.jpg'
    },
    {
        id: '2',
        name: 'PUBG',
        viewer: '8',
        label: 'PC game',
        image: 'https://img.nimo.tv/o/banner/DE2346FAA2868BC486106C80A3738C42_ce9a7a0f6d9636941570342f395fdc3e.jpg/w256_l0/img.jpg'
    },
    {
        id: '3',
        name: 'Gata 5',
        viewer: '16',
        label: 'PC game',
        image: 'https://img.nimo.tv/o/banner/7F21C5AAE1021C882B2D73D67F556BFC_e2031e43bd90ddd97298400b390af77b.jpg/w256_l0/img.jpg'
    },
    {
        id: '4',
        name: 'PUBG Mobile',
        viewer: '20',
        label: 'Mobile game',
        image: 'https://img.nimo.tv/o/banner/6CDF8549BB204CAB769F4B303B192D59_4ae75ac434ef123a99939f231757ccba.jpg/w256_l0/img.jpg'
    },
    {
        id: '5',
        name: 'Just Chatting',
        viewer: '23',
        label: 'PC game',
        image: 'https://img.nimo.tv/o/banner/9B07BE282001E6DA0876282ED1E60E66_3846d7561a22b59a8e066462f438bc66.jpg/w256_l0/img.jpg'
    },
    {
        id: '6',
        name: 'League of Legends',
        viewer: '124',
        label: 'PC game',
        image: 'https://img.nimo.tv/o/banner/6349E139B47568476F09BF716E9635F7_acde1568d4c6d846e9f82c234717af4c.jpg/w256_l0/img.jpg'
    },
    {
        id: '7',
        name: 'AOV',
        viewer: '27',
        label: 'Mobile game',
        image: 'https://img.nimo.tv/o/banner/DE7C1CFE9B88D5FD34D6F6F16A532149_6fb25842712fdff64d96a97e1ad62a21.jpg/w256_l0/img.jpg'
    },
    {
        id: '8',
        name: 'Free Fire',
        viewer: '15',
        label: 'Mobile game',
        image: 'https://img.nimo.tv/o/banner/3B514EA3DBFD1E0F25CFFDB879FA0E74_2f4bd6de9c373136daac0836034b35fd.jpg/w256_l0/img.jpg'
    },
]
export default function TopGame() {

    const Next = () => {
        const slide = document.querySelector(`.${style.topgame__slides_list}`);
        slide.style.transform = "translateX(-602px)";
    }
    const Prev = () => {
        const slide = document.querySelector(`.${style.topgame__slides_list}`);
        slide.style.transform = "translateX(0px)";
    }
    return (
        <div className={style.topgame}>
            <div className={style.topgame__group}>
                <div className={style.topgame__header}>
                    <div className={style.topgame__left}>
                        <a className="" href="#!">
                            <h1>Top Games</h1>
                            <span>Viewer</span>
                        </a>
                        <ul className={style.topgame__left_list}>
                            <li className={style.topgame__left_item}>
                                <a className={style.topgame__left_link} href="#!">
                                    All
                                </a>
                            </li>
                            <li className={style.topgame__left_item}>
                                <a className={style.topgame__left_link} href="#!">
                                    Mobile game
                                </a>
                            </li>
                            <li className={style.topgame__left_item}>
                                <a className={style.topgame__left_link} href="#!">
                                    PC Game
                                </a>
                            </li>
                            <li className={style.topgame__left_item}>
                                <a className={style.topgame__left_link} href="#!">
                                    Others
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={style.topgame__right}>
                        <span onClick={() => Prev()} id="prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" /></svg></span>
                        <span onClick={() => Next()} id="next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" /></svg></span>
                    </div>
                </div>
                <div className={style.topgame__slides}>
                    <div className={style.topgame__slides_container}>
                        <ul style={{ transform: "translateX(0)" }} className={style.topgame__slides_list}>

                            {listSlides.map(item => (

                                <li key={item.id} className={style.topgame__slides_item}>

                                    <a href="#!" className={style.topgame__slides_link}>
                                        <div className={style.topgame__slides_image}>
                                            <div className={style.topgame__slides_image_bl}>
                                                <img src={item.image} alt="" />
                                                <div className={style.topgame__slides_image_content}>
                                                    <div className={style.topgame__slides_image_content_overlay}></div>
                                                    <h1>{item.name}</h1>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" /></svg>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={style.topgame__slides_image_bg}></div>
                                        </div>

                                    </a>

                                    <div className={style.topgame__slides_content}>
                                        <h1>{item.name}</h1>
                                        <div>{item.viewer} lives</div>
                                        <label>{item.label}</label>
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