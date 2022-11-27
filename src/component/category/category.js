import style from "./category.module.scss";
import SideBar from "../sidebar/sidebar";
/*import { useEffect, useState } from "react";*/

const dataCategory = [
    {
      "id": "1",
      "name": "Free Fire",
      "image": "https://img.nimo.tv/o/banner/E524D3A4150BCB94CCB8835142508A76_FreeFire.jpg/w500_l0/img.jpg"
    },
    {
      "id": "2",
      "name": "GTA5",
      "image": "https://img.nimo.tv/o/banner/4F5001B3D1DDBABB8F2C9E0567B4F6BF_GTA5.jpg/w500_l0/img.jpg"
    },
    {
      "id": "3",
      "name": "Liveshow",
      "image": "https://img.nimo.tv/o/banner/9BFDF699E480D6A4A3B8B4572FA90F69_06b6a603b0a97d3baa7dbdd9c86c8aaa.jpg/w500_l0/img.jpg"
    },
    {
      "id": "4",
      "name": "Mobile Legends",
      "image": "https://img.nimo.tv/o/banner/D126C9C813178A85B313B491F29E6632_7f2de02df66074f3dbe5978b66a82158.png/w500_l0/img.png"
    },
    {
      "id": "5",
      "name": "PUBG Mobile",
      "image": "https://img.nimo.tv/o/banner/CB5F66204E8B6FDBDD052B6FE8EBAF05_Pubgmobile.jpg/w500_l0/img.jpg"
    },
    {
      "id": "6",
      "name": "PC Games",
      "image": "https://img.nimo.tv/o/banner/A4B54A4827003C7F665D4C32740C2B59_pcgame.jpg/w500_l0/img.jpg"
    },
    {
      "id": "7",
      "name": "League of Legends",
      "image": "https://img.nimo.tv/o/banner/DD32D5B48663891CE87978F262E2FA41_LOL.jpg/w500_l0/img.jpg"
    },
    {
      "id": "8",
      "name": "VALORANT",
      "image": "https://img.nimo.tv/o/banner/5E2B7DEE566F12BCC4F26580E8421E9F_b223f0ef4dadd4b55a3091cd829ab3c3.jpg/w500_l0/img.jpg"
    },
    {
      "id": "9",
      "name": "Fortnite",
      "image": "https://img.nimo.tv/o/banner/23D7691DE942D4FA1BB029BF2252016C_1.jpg/w500_l0/img.jpg"
    },
    {
      "id": "10",
      "name": "Minecraft",
      "image": "https://img.nimo.tv/o/banner/85D90EDE97ED239431D27A9BA05FAA54_Minecfart.jpg/w500_l0/img.jpg"
    },
    {
      "id": "11",
      "name": "ROV",
      "image": "https://img.nimo.tv/o/game/CA20B74C0DF9E8494ADE3907A569AB05_Realmofvalor.png/w500_l0/img.png"
    },
    {
      "id": "12",
      "name": "Other games",
      "image": "https://img.nimo.tv/o/game/675F6DD84822482F277AD7E99FB71A7_othergamecover.png/w500_l0/img.png"
    },
    {
      "id": "14",
      "name": "PUBG",
      "image": "https://img.nimo.tv/o/banner/7D72FB74E18981B05842F783EDD3B7A4_Pubg.jpg/w500_l0/img.jpg"
    },
    {
      "id": "15",
      "name": "Just Chatting",
      "image": "https://img.nimo.tv/o/banner/714D37E0897F8DF5DE6D7E2927ABB3D5_4ae75ac434ef123a99939f231757ccba.jpg/w500_l0/img.jpg"
    },
    {
      "id": "16",
      "name": "Call of Duty: Mobile",
      "image": "https://img.nimo.tv/o/banner/E419176B2A51456959F3BF1B29822F46_cod315.jpg/w500_l0/img.jpg"
    },
    {
      "id": "17",
      "name": "Minecraft Dungeons",
      "image": "https://img.nimo.tv/o/banner/85162799FB7780346D0FDCC48955681D_56c87fdae16541edee50c25932a32925.jpg/w500_l0/img.jpg"
    },
    {
      "id": "18",
      "name": "FIFA 22",
      "image": "https://img.nimo.tv/o/banner/C75E5EA69AB57C6EE8EA4F1329EE5BDA_72c5eeb9a75c4855b279e9f435cb5f4d.png/w500_l0/img.png"
    },
    {
      "id": "19",
      "name": "Dota 2",
      "image": "https://img.nimo.tv/o/game/7E6244504CB3B5ADC51DD370900D92A7_DOTA2X.jpg/w500_l0/img.jpg"
    },
    {
      "id": "20",
      "name": "Watch Together",
      "image": "https://img.nimo.tv/o/banner/912F2F1DA30DD15F188532340C1DC13A_312x468.png/w500_l0/img.png"
    },
    {
      "id": "21",
      "name": "Dead by Daylight",
      "image": "https://img.nimo.tv/o/game/83A6678559CF6B73394E6F8C6E19B1BB_DeadbyDaylight.jpg/w500_l0/img.jpg"
    },
    {
      "id": "22",
      "name": "Dragon Brawlers",
      "image": "https://img.nimo.tv/o/banner/3481F43AC852B8D936B3CBF55C6CF709_3923d0380081f7ed36aaffd9fd34617f.png/w500_l0/img.png"
    },
    {
      "id": "23",
      "name": "Halo",
      "image": "https://img.nimo.tv/o/banner/9E5CFC85CCCE05AD8BD636958C985AD_312.jpg/w500_l0/img.jpg"
    },
    {
      "id": "24",
      "name": "Call of Duty",
      "image": "https://img.nimo.tv/o/banner/4F89AAC0325C3338D2270FB082B435FB_312.jpg/w500_l0/img.jpg"
    },
    {
      "id": "25",
      "name": "AOE",
      "image": "https://img.nimo.tv/o/banner/EA0EF43D5DE9441C819D081DC07A5E38_f6af9a0c407601370012c23be35db5ed.jpg/w500_l0/img.jpg"
    },
    {
      "id": "26",
      "name": "PUBG MOBILE LITE",
      "image": "https://img.nimo.tv/o/banner/2450FB0A710F0F8262B2F189F08AF2B2_312468.jpg/w500_l0/img.jpg"
    },
    {
      "id": "27",
      "name": "Brawl Stars",
      "image": "https://img.nimo.tv/o/banner/97DFF99EA10DC5B9E9314ADCA5824C76_BrawlStars.jpg/w500_l0/img.jpg"
    },
    {
      "id": "28",
      "name": "CrossFire",
      "image": "https://img.nimo.tv/o/banner/473A92C816484E68874F6B4286FA5E63_CrossFire.jpg/w500_l0/img.jpg"
    },
    {
      "id": "29",
      "name": "League of Legends: Wild Rift",
      "image": "https://img.nimo.tv/o/banner/907E352061A6EE3EF4E58A9B74F4E649_71e179563a513bbb7293c831593c0ed1.jpg/w500_l0/img.jpg"
    },
    {
      "id": "30",
      "name": "CS:GO",
      "image": "https://img.nimo.tv/o/banner/162503C5484F44D0D6E2B3706E7C60DA_CSGO.jpg/w500_l0/img.jpg"
    },
    {
      "id": "31",
      "name": "Minecraft Mobile",
      "image": "https://img.nimo.tv/o/banner/85D90EDE97ED239431D27A9BA05FAA54_Minecfart.jpg/w500_l0/img.jpg"
    },
    {
      "id": "32",
      "name": "Red Dead Redemption 2",
      "image": "https://img.nimo.tv/o/banner/5BAD8D59AF871CE24987A3F544AA7E06_timg.jpg/w500_l0/img.jpg"
    },
    {
      "id": "33",
      "name": "Chess Rush",
      "image": "https://img.nimo.tv/o/banner/A22A70DD6C26F9CDBCC5C3B2C9D96617_312x468.jpg/w500_l0/img.jpg"
    },
    {
      "id": "34",
      "name": "8ballpool",
      "image": "https://img.nimo.tv/o/banner/3497D4F7A6F7D55C5FC84CE776F450F3_8ballpool.jpg/w500_l0/img.jpg"
    },
    {
      "id": "35",
      "name": "Clash of Clans",
      "image": "https://img.nimo.tv/o/banner/81FA459EA05F2FA7B62BC98B6B681ADD_Clashofclans.jpg/w500_l0/img.jpg"
    },
    {
      "id": "36",
      "name": "The Forest",
      "image": "https://img.nimo.tv/o/banner/A202B4EAC888F293CA0D300316FDD458_forest.png/w500_l0/img.png"
    },
    {
      "id": "37",
      "name": "Murderous Pursuits",
      "image": "https://img.nimo.tv/o/banner/9A99F17D8DF741AF605BABEFC197F58C_312x468.jpg/w500_l0/img.jpg"
    },
    {
      "id": "38",
      "name": "Mini World",
      "image": "https://img.nimo.tv/o/banner/B07C9752732A0FECBF8890D45D527551_c0ff36e8759fd773a5695cf9ac3e42ef.png/w500_l0/img.png"
    },
    {
      "id": "39",
      "name": "Point Blank",
      "image": "https://img.nimo.tv/o/banner/DA2CC387808E8547A5ECD7CABC7066EC_3.png/w500_l0/img.png"
    },
    {
      "id": "40",
      "name": "PUBG LITE",
      "image": "https://img.nimo.tv/o/banner/28408D20066A66DA6F8AF3E8070D06DF_pubglite.jpg/w500_l0/img.jpg"
    },
    {
      "id": "41",
      "name": "IDENTITY V",
      "image": "https://img.nimo.tv/o/game/C5BD5779058F1CC5127384C81F272D47_IDENTITYV.png/w500_l0/img.png"
    },
    {
      "id": "42",
      "name": "Clash Royale",
      "image": "https://img.nimo.tv/o/game/A12C66390BC009A4A441D7FDCB9C9932_ClashRoyale.jpg/w500_l0/img.jpg"
    },
    {
      "id": "43",
      "name": "PES Mobile",
      "image": "https://img.nimo.tv/o/banner/AC70B1B584EB3EC028D36B90A0DD1932_PESMobile.png/w500_l0/img.png"
    },
    {
      "id": "44",
      "name": "Lucky Draws",
      "image": "https://img.nimo.tv/o/banner/DFB3CE1ACCBB3B2D66BB484A0743B7B5_312x468.png/w500_l0/img.png"
    },
    {
      "id": "45",
      "name": "ROBLOX Mobile",
      "image": "https://img.nimo.tv/o/banner/AF8D2AF4CDD568CC6746A23C2BAA0296_4E2A7CDC392FE90196AE091170E3044_312_468.jpg/w500_l0/img.jpg"
    },
    {
      "id": "46",
      "name": "Speed Drifters",
      "image": "https://img.nimo.tv/o/banner/A06A2ECAE964894A3D6ADF37262CF976_QQ1111.jpg/w500_l0/img.jpg"
    },
    {
      "id": "47",
      "name": "Mobile Games",
      "image": "https://img.nimo.tv/o/banner/E84C49F3042442479593AF659B60515_Mobilegame.jpg/w500_l0/img.jpg"
    },
    {
      "id": "48",
      "name": "Apex Legends",
      "image": "https://img.nimo.tv/o/banner/EC54AB2FC29100ECF729F8CDB63DEB77_APEXseason1.jpg/w500_l0/img.jpg"
    },
    {
      "id": "49",
      "name": "Outdoor",
      "image": "https://img.nimo.tv/o/banner/BF155E297933B2B69E892F5953A94DE3_huwai.png/w500_l0/img.png"
    },
    {
      "id": "50",
      "name": "FIFA Mobile",
      "image": "https://img.nimo.tv/o/game/F617A1A0747FFB3CB3ED2BBD4A9ED16D_20180605195053.jpg/w500_l0/img.jpg"
    },
    {
      "id": "51",
      "name": "World of Warcraft",
      "image": "https://img.nimo.tv/o/banner/C4DDB91D5AEF392DD3B0D4AD814F88B7_312x468.jpg/w500_l0/img.jpg"
    },
    {
      "id": "52",
      "name": "Cyber Hunter",
      "image": "https://img.nimo.tv/o/banner/B195D2EE1BF158C636E7BFC6E15EC68F_Cyberhunter.jpg/w500_l0/img.jpg"
    },
    {
      "id": "53",
      "name": "LOL Teamfight Tactics",
      "image": "https://img.nimo.tv/o/banner/85FA4B106AD9332A75403443755307F2_312x468.png/w500_l0/img.png"
    },
    {
      "id": "54",
      "name": "Rust",
      "image": "https://img.nimo.tv/o/banner/8BC5B447C014E36A7B70F93B7448A3A8_RUST.png/w500_l0/img.png"
    },
    {
      "id": "55",
      "name": "Crash Team Racing",
      "image": "https://img.nimo.tv/o/banner/B30DE63135861F5E25782A862ED9C727_1.jpg/w500_l0/img.jpg"
    },
    {
      "id": "56",
      "name": "Steam games",
      "image": "https://img.nimo.tv/o/banner/E0C3383BC3E83F9E972150EE119EB750_312x468.jpg/w500_l0/img.jpg"
    },
    {
      "id": "57",
      "name": "Zula",
      "image": "https://img.nimo.tv/o/banner/611E7B6F56F9E76AA53CBF3A781C74AA_385209b4767fd4b11075d43ec719271d.png/w500_l0/img.png"
    },
    {
      "id": "58",
      "name": "Fortnite Mobile",
      "image": "https://img.nimo.tv/o/banner/F6073A7AE6E15E38E7FB7FE5BCC5FCDD_7B3CA178CE0BE231F8176BD5BEF523BA_Fortnite.jpg/w500_l0/img.jpg"
    },
    {
      "id": "59",
      "name": "ARK: Survival Evolved",
      "image": "https://img.nimo.tv/o/game/A869BE86987B8396FF4A71023CAE4BD5_poster.jpg/w500_l0/img.jpg"
    },
    {
      "id": "60",
      "name": "Just Chatting",
      "image": "https://img.nimo.tv/o/banner/FB945690EF82B6B41CCEF01DEE718EC_312x468.jpg/w500_l0/img.jpg"
    },
    {
      "id": "61",
      "name": "Rainbow Six Siege",
      "image": "https://img.nimo.tv/o/game/6FCAAFEBB23328BE25F7FCD59FDA96A4_RainbowSix.jpg/w500_l0/img.jpg"
    },
    {
      "id": "62",
      "name": "Overwatch",
      "image": "https://img.nimo.tv/o/game/A2A20A78CDADA7100204F9446D1B15CB_owx.jpg/w500_l0/img.jpg"
    },
    {
      "id": "63",
      "name": "ROBLOX",
      "image": "https://img.nimo.tv/o/banner/4E2A7CDC392FE90196AE091170E3044_312_468.jpg/w500_l0/img.jpg"
    },
    {
      "id": "64",
      "name": "Subway Surfers",
      "image": "https://img.nimo.tv/o/banner/8006CBF6DB05F554273582D5127C9E41_subs.jpg/w500_l0/img.jpg"
    },
    {
      "id": "65",
      "name": "Resident Evil 2",
      "image": "https://img.nimo.tv/o/banner/7C851B41CC72B1F3046B29155C1BAA9C_RE2312468.jpg/w500_l0/img.jpg"
    },
    {
      "id": "66",
      "name": "Scum",
      "image": "https://img.nimo.tv/o/banner/CAB4E61FD83F29D0793C7D636FE4E236_1.jpg/w500_l0/img.jpg"
    },
    {
      "id": "67",
      "name": "TFT",
      "image": "https://img.nimo.tv/o/banner/65C363DBB6FE3252E9009F53E93FB47A_team.jpg/w500_l0/img.jpg"
    },
    {
      "id": "68",
      "name": "Call of Duty : Modern Warfare",
      "image": "https://img.nimo.tv/o/banner/D78CD3ED84AB551BF442F6FAE1701FF4_96de1cf0e6b893e0a86fc22056ff6b63.png/w500_l0/img.png"
    },
    {
      "id": "69",
      "name": "Call of Duty Mobile",
      "image": "https://img.nimo.tv/o/banner/24314FEA9CC06302986513F8695B3316_4ae75ac434ef123a99939f231757ccba.jpg/w500_l0/img.jpg"
    },
    {
      "id": "70",
      "name": "Avakin Life",
      "image": "https://img.nimo.tv/o/banner/F7729FDFFFA87DEC51A5C9BC8A5D0742_986c9d947a940dc9197729df2f1e0a30.png/w500_l0/img.png"
    },
    {
      "id": "71",
      "name": "League of stickman",
      "image": "https://img.nimo.tv/o/banner/7AC4C28675DD2A2A2F1CC3C0AF360ED4_huochai.png/w500_l0/img.png"
    },
    {
      "id": "72",
      "name": "FIFA ONLINE 4",
      "image": "https://img.nimo.tv/o/banner/5EE04056D78462A9916B88D90BFF1250_fifa4.jpg/w500_l0/img.jpg"
    },
    {
      "id": "73",
      "name": "God of War",
      "image": "https://img.nimo.tv/o/game/3814DB5DEC529957755165F7C099AB8A_GodofWar.jpg/w500_l0/img.jpg"
    },
    {
      "id": "74",
      "name": "Saint Seiya Awakening:knights of the zodiac",
      "image": "https://img.nimo.tv/o/banner/A22A8F532A4FB4806EB10ACB94A05A0F_312468.png/w500_l0/img.png"
    },
    {
      "id": "75",
      "name": "Raft",
      "image": "https://img.nimo.tv/o/banner/D3565EC693FF9876168652807675D5BB_Raft.png/w500_l0/img.png"
    },
    {
      "id": "76",
      "name": "Candy Crush Saga",
      "image": "https://img.nimo.tv/o/banner/7DEC8B6DA3B7DAF242703ECDF62AC696_CandyCrushSaga.png/w500_l0/img.png"
    },
    {
      "id": "77",
      "name": "POKO",
      "image": "https://img.nimo.tv/o/banner/83F2F4AE8978D728A2A331F2B38086ED_312_468.jpg/w500_l0/img.jpg"
    }
  ]
export default function Category() {

    /*const [data, setData] = useState()

    useEffect(() => {
        fetch("./dataCategory.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])*/


    return (
        <div className={style.main}>
            <div className={style.group}>
                <SideBar />
                <div className={style.right}>
                    <div className={style.header}>
                        <h1>All Game</h1>
                        <div className={style.btn_group}>
                            <button>All</button>
                            <button>Mobile Game</button>
                            <button>PC Game</button>
                            <button>Others</button>
                        </div>
                    </div>
                    <ul className={style.list}>
                        {dataCategory && dataCategory.map(item => (
                            <li key={item.id} className={style.item}>
                                <a href="#!">
                                    <div>
                                        <img src={item.image} alt="" />
                                    </div>
                                    <h3>
                                        {item.name}
                                    </h3>
                                </a>
                            </li>
                        ))}

                    </ul>
                </div>
                <div className={style.back}></div>
            </div>
        </div>
    )
}

