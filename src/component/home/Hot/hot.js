import style from "./hot.module.scss";


const listData = [
    {
        id: 1,
        name: "TuiTenBo",
        content: "Gét Gô",
        game: "GTA5",
        view: "58.6k",
        lable: [
            "skill",
        ],
        image: "https://img.nimo.tv/o/banner/895C1F4E390677A592335885D93A270B_68a9616e8a4176e6b5b18badc931dbf1.jpg/w800_l0/img.webp",
        avatar: "https://img.nimo.tv/t/201907111562875240667_1629511896446_avatar.png/w120_l0/img.png",
    },
    {
        id: 2,
        name: "Fev Nguyen",
        content: "AYOOOOO",
        game: "GTA5",
        view: "44k",
        lable: [
            "skill",
        ],
        image: "https://img.nimo.tv/o/banner/EFC545CEFCCD5E5671A2D79323D6C4DB_fc036ae318477f4a46c623820f28e5bb.jpg/w800_l0/img.jpg",
        avatar: "https://img.nimo.tv/t/1939513246539/202102251614233690795_1939513246539_avatar.png/w120_l0/img.png",
    },
    {
        id: 3,
        name: "Gum Gum",
        content: "Acoustic",
        game: "Liveshow",
        view: "2.8k",
        lable: [
            "PK",
        ],
        image: "https://img.nimo.tv/c/202205181652874447035_1629528533777_cover.jpg/w800_h452_a1_l0/img.jpg",
        avatar: "https://img.nimo.tv/t/1629528533777/202205211653165014843_1629528533777_avatar.png/w120_l0/img.png"
    },
    {
        id: 4,
        name: "Yến Thanh",
        content: "Em là idol hát ạ",
        game: "Liveshow",
        view: "2.2k",
        lable: [
        ],
        image: "https://img.nimo.tv/c/202205241653366606132_1629517046411_cover.jpg/w800_h452_a1_l0/img.webp",
        avatar: "https://img.nimo.tv/t/1629517046411/202205251653504082661_1629517046411_avatar.png/w120_l0/img.png",
    },
    {
        id: 5,
        name: "Senna Meta",
        content: "Try Hard Top 10 Thách Đấu",
        game: "League of Legend",
        view: "9.2k",
        lable: [

        ],
        image: "https://img.nimo.tv/o/banner/F7A38DAFE18A0BA0FBEAAA95D9818329_12353af0a6aa4a1aa79163c6d26d5afb.jpg/w800_l0/img.jpg",
        avatar: "https://img.nimo.tv/t/1599517431273/202101191611044562699_1599517431273_avatar.png/w120_l0/img.png",
    },
    {
        id: 6,
        name: "Bộ Bim",
        content: "Cày top sever siêu gắt",
        game: "PUBG Mobile",
        view: "8.6k",
        lable: [
        ],
        image: "https://img.nimo.tv/o/banner/E06A8FDF2677FF9C93CEFF0179A56734_1bed3a1840bcf50919214a66bcab52db.jpg/w800_l0/img.jpg",
        avatar: "https://img.nimo.tv/t/1599517262565/202106181624042103330_1599517262565_avatar.png/w120_l0/img.png"
    },
    {
        id: 7,
        name: "SBTC Clear",
        content: "Playoff",
        game: "League of Legend",
        view: "13.6k",
        lable: [
            "bet",
        ],
        image: "https://img.nimo.tv/o/banner/2D0C8E6DEF72807AA2F061267D57A0CC_8149f2902c65ba4148d8139fafa9696f.jpg/w800_l0/img.jpg",
        avatar: "https://img.nimo.tv/t/1639520235773/202201271643281756472_1639520235773_avatar.png/w120_l0/img.png"
    },
    {
        id: 8,
        name: "Hằng Đàm",
        content: "Cửu Muội",
        game: "League of Legend",
        view: "4.6k",
        lable: [
            "good"
        ],
        image: "https://img.nimo.tv/o/banner/C54C2010665B81A6E4D46D538FD9B77B_fa975a13abe1da562deb9e0afb1a5862.jpg/w800_l0/img.jpg",
        avatar: "https://img.nimo.tv/t/1599511722238/202111221637585250268_1599511722238_avatar.png/w120_l0/img.png"
    },
    {
        id: 9,
        name: "Celebrity",
        content: "Hello !",
        game: "League of Legend",
        view: "7.6k",
        lable: [
            "bet",
        ],
        image: "https://img.nimo.tv/o/banner/EDB529899869F5F79C899EF3BB941417_294d9e3fc9a6f1fca31f3f05d6195305.jpg/w800_l0/img.jpg",
        avatar: "https://img.nimo.tv/t/1629525701018/202007081594225086140_1629525701018_avatar.jpg/w120_l0/img.jpg"
    },
]
function Hot() {
    return (
        <div className={style.hot}>
            <div className={style.hot__group}>
                <div className={style.hot__headding}>

                    <div className={style.hot__headding_group}>
                        <h1>
                            Hot
                        </h1>
                        <a href='#!'>More</a>
                    </div>

                    <div className={style.hot__headding_live}>
                        <ul className={style.hot__headding_live_list}>
                            {listData.map(item => (
                                <li key={item.id} className={style.hot__headding_live_item}>

                                    <a className={style.hot__headding_live_link} href="#!">
                                        <div className={style.hot__headding_live_link_img_group}>
                                            <img src={item.image} alt='' />
                                            <button>{item.game}</button>
                                            <div className={style.hover}>
                                                <div className={style.overlay}></div>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" /></svg>
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                    <div className={style.hot__headding_live_card}>
                                        <div className={style.hot__headding_live_card_group}>

                                            <div className={style.hot__headding_live_card_avatar}>
                                                <img src={item.avatar} alt="" />
                                            </div>
                                            <div className={style.hot__headding_live_card_content}>
                                                <h3>{item.content}</h3>
                                                <h4>{item.name}</h4>
                                                <div>
                                                    <label>{item.lable}</label>
                                                </div>
                                            </div>

                                            <div className={style.hot__headding_live_card_view}>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z" /></svg>
                                                </span>
                                                <p>{item.view}</p>
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


export default Hot;