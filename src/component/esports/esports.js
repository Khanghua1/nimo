import style from "./esports.module.scss";
import SideBar from "../sidebar/sidebar";

const data = [
    {
      "id": 42,
      "name": "All game",
      "image": "https://img.nimo.tv/nw/nms/images/all-game-icon.4eef5339dbc8fe4a68eac11803926e45.png/w88_l0/img.png",
      "status": ""
    },
    {
      "id": 44,
      "name": "PUBG Mobile",
      "image": "https://img.nimo.tv/o/banner/216D66953766043ED85F39D1065EA1B3_ea11e627e16d061d675930a77137e890.png/w88_l0/img.png",
      "status": "Coming soon"
    },
    {
      "id": 54,
      "name": "Mobile Legends",
      "image": "https://img.nimo.tv/o/banner/6034F4CF201670296092F3D4474046FD_6afe99c696f3459ab5777bc493ac8f8e.png/w88_l0/img.png",
      "status": "Coming soon"
    },
    {
      "id": 95,
      "name": "VALORANT",
      "image": "https://img.nimo.tv/o/banner/12AB8CB7E4ECBA5F6B19C9CC043615CE_d22e396588491e5c495e1996674b4648.png/w88_l0/img.png",
      "status": "Coming soon"
    },
    {
      "id": 52,
      "name": "Free Fire",
      "image": "https://img.nimo.tv/o/banner/775CE7D3A15EEBE9EF55B3C004976F68_67238d26bc9c08b24d334459977b0ca0.png/w88_l0/img.png",
      "status": "Coming soon"
    },
    {
      "id": 13,
      "name": "GTA5",
      "image": "https://img.nimo.tv/o/banner/EEDA59C084E5C5131402D7EF193A3366_c311e689cf0d9d909326dd6a42c58d35.png/w88_l0/img.png",
      "status": "Coming soon"
    },
    {
      "id": 64,
      "name": "League of Legends: Wild Rift",
      "image": "https://img.nimo.tv/o/banner/C12836D77C0D25CC34A3A2003BD9DC75_beeb3e1f1be397b4383f33502e164b1e.png/w88_l0/img.png",
      "status": "Coming soon"
    }
  ]
export default function Esports() {




    return (
        <div className={style.header}>
            <div className={style.header_group}>
                <SideBar />
                <div style={{ width: "0", overflow: "visible" }}>
                    <div style={{ width: "992px" }} className={style.header_right}>
                        <div className={style.header_slides}>
                            <ul className={style.header_list}>
                                {data && data.map(item => (
                                    <li key={item.id} className={style.header_item}>
                                        <div className={style.header_info}>
                                            <img src={item.image} alt={item.image} />
                                            <div className={style.header_name}>
                                                <h2>{item.name}</h2>
                                                <span>{item.status}</span>
                                            </div>

                                        </div>
                                    </li>
                                ))}

                            </ul>
                        </div>

                        <div className={style.hot_match}>
                            <div className={style.hot_match_icon}>
                                <img src="https://img.nimo.tv/nw/nms/images/hot-icon.fd57c486c5d5afe2d84a700c922c86c1.png/l0/img.webp" alt="icon-hot-match" />
                                <h3>Hot Match</h3>
                            </div>
                            <div className={style.match_live}>
                                <div className={style.match_live_right}>

                                </div>
                                <div className={style.match_live_left}>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

