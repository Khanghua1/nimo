import style from "./live.module.scss";
import SideBar from "../sidebar/sidebar";
import LiveCard from "./livecard/livecard";

const data = [
    {
      "id": 1,
      "name": "LiveShow",
      "item": [
        {
          "id": 1,
          "name": "[Master] Cẩm Anh",
          "content": "Tháng mới may mắn 💙",
          "lable": [
            "pk"
          ],
          "view": "2.8k",
          "img": "https://img.nimo.tv/c/202205051651731451872_1599517945945_cover.jpg/w800_h452_a1_l0/img.jpg",
          "avatar": "https://img.nimo.tv/t/1599517945945/202204151650006448188_1599517945945_avatar.png/w120_l0/img.png"
        },
        {
          "id": 2,
          "name": "[PIT]Yến Thanh",
          "content": "Em là idol hát ạ",
          "lable": [
            ""
          ],
          "view": "2.1k",
          "img": "https://img.nimo.tv/c/202204161650121563989_1599517643091_cover.jpg/w800_h452_a1_l0/img.jpg",
          "avatar": "https://img.nimo.tv/t/1599517643091/202204131649858066006_1599517643091_avatar.png/w120_l0/img.png"
        },
        {
          "id": 3,
          "name": "[CCC]Ekki Cute",
          "content": "Helluuuu 🥰",
          "lable": [
            "PK"
          ],
          "view": "2k",
          "img": "https://img.nimo.tv/c/202204221650608575401_1599517967844_cover.jpg/w800_h452_a1_l0/img.jpg",
          "avatar": "https://img.nimo.tv/t/1599517967844/202201211642762226152_1599517967844_avatar.png/w120_l0/img.png"
        }
      ]
    },
    {
      "id": 2,
      "name": "GTA5",
      "item": [
        {
          "id": 1,
          "name": "GÉT GÔ",
          "content": "TUITÊNBÔ",
          "lable": [
            "Skill",
            "Humor"
          ],
          "view": "58.8k",
          "img": "https://img.nimo.tv/o/banner/895C1F4E390677A592335885D93A270B_68a9616e8a4176e6b5b18badc931dbf1.jpg/w800_l0/img.jpg",
          "avatar": "https://img.nimo.tv/t/201907111562875240667_1629511896446_avatar.png/w120_l0/img.png"
        },
        {
          "id": 2,
          "name": "KL7",
          "content": "Kay Bích - Đặc vụ 777 MixiCity",
          "lable": [
            ""
          ],
          "view": "7.1k",
          "img": "https://img.nimo.tv/o/banner/2BE9F952FDE18BD8144EECA767640C6_1482d6a7bfa4695ef98285ddcec204c5.jpg/w800_l0/img.jpg",
          "avatar": "https://img.nimo.tv/t/201807111531318560539_20014381_avatar.png/w120_l0/img.png"
        },
        {
          "id": 3,
          "name": "7UP",
          "content": "Cá mú",
          "lable": [
            ""
          ],
          "view": "3k",
          "img": "https://img.nimo.tv/o/banner/464735BE28F50A42E9A04E68F33A0A88_c7e3f0a2d7be75a8f4b0de7c8eb5a762.jpg/w800_l0/img.jpg",
          "avatar": "https://img.nimo.tv/t/1629527600273/202205081651998934827_1629527600273_avatar.png/w120_l0/img.png"
        }
      ]
    },
    {
      "id": 3,
      "name": "PUBG Mobile",
      "item": [
        {
          "id": 1,
          "name": "F4",
          "content": "F4 SOLO SQUAD TOP VN",
          "lable": [
            "Bet"
          ],
          "view": "3.9k",
          "img": "https://img.nimo.tv/o/banner/44DD07A86153E6E9E177926642F332C5_eb022847ac69fee31725507f10ee04df.jpeg/w800_l0/img.jpeg",
          "avatar": "https://img.nimo.tv/t/1629520732058/202202191645289034755_1629520732058_avatar.png/w120_l0/img.png"
        },
        {
          "id": 2,
          "name": "Tiểu Ca Gaming",
          "content": "Follow Me!!!",
          "lable": [
            ""
          ],
          "view": 161,
          "img": "https://txpic.vod.nimo.tv/su1829511766072r1af4825bb77f55b20370311147558a7e_338_190.jpg?t=1654089600000",
          "avatar": "https://img.nimo.tv/t/1829511766072/202205091652078049468_1829511766072_avatar.png/w120_l0/img.png"
        },
        {
          "id": 3,
          "name": "[Bắp] Gaming",
          "content": "Rặn 500₫ #123",
          "lable": [
            ""
          ],
          "view": "1K",
          "img": "https://wspic.vod.nimo.tv/sg/live/338*190/su1629522622382r69a5344779d07ce5f57e03fb13152e5f.jpg?t=1654089600000",
          "avatar": "https://img.nimo.tv/t/1629522622382/202204281651148163776_1629522622382_avatar.png/w120_l0/img.png"
        }
      ]
    },
    {
      "id": 4,
      "name": "League of Legends",
      "item": [
        {
          "id": 1,
          "name": "Thầy Giáo Ba",
          "content": "toi vui ve  #CastrolPOWER1",
          "lable": [],
          "view": "34.9k",
          "img": "https://img.nimo.tv/o/banner/DECD33AA4B29E54405AD2E5068DA6AFE_a675f4a1d7c2d39aaa8aaa22ded88b29.jpg/w800_l0/img.jpg",
          "avatar": "https://img.nimo.tv/t/1629511905172/202111241637776500538_1629511905172_avatar.png/w120_l0/img.png"
        },
        {
          "id": 2,
          "name": "SBTC Petland",
          "content": "TRAIN TEAM CHO PLAYOFF NTCS",
          "lable": [
            ""
          ],
          "view": "7.3k",
          "img": "https://img.nimo.tv/o/banner/AE0FD6D44C3C0AFA759DF6F4EC0ED139_6f6a65254cfd8855530f1d6e0702a733.jpg/w800_l0/img.jpg",
          "avatar": "https://img.nimo.tv/t/1639520235565/202206011654051584095_1639520235565_avatar.png/w120_l0/img.png"
        },
        {
          "id": 3,
          "name": "Tứ Tồ",
          "content": "1/6 Chúc cả nhà may mắn :3",
          "lable": [
            "PickMe",
            "Bet"
          ],
          "view": "1K",
          "img": "https://img.nimo.tv/o/banner/C3CE569BDD44836EF5698C9B66EEF48B_b80541a286ae8c3ac2203faae354242b.jpg/w800_l0/img.jpg",
          "avatar": "https://img.nimo.tv/t/1599518329513/202111301638258912880_1599518329513_avatar.png/w120_l0/img.png"
        }
      ]
    },
    {
      "id": 5,
      "name": "Just Chatting",
      "item": [
        {
          "id": 1,
          "name": "Lục Linh",
          "content": "Mặt đang dị ứng nên tắt cam ạ",
          "lable": [
            ""
          ],
          "view": 349,
          "img": "https://img.nimo.tv/o/banner/FCBF3E79511C4EA376536823AE92FBEB_623a92e219bf43794cf2b90e886702c3.jpg/w800_l0/img.jpg",
          "avatar": "https://img.nimo.tv/t/1639516029916/202204221650647604048_1639516029916_avatar.png/w120_l0/img.png"
        },
        {
          "id": 2,
          "name": "LightWorker",
          "content": "(LAL) Xin Một Theo Dõi Đi AE!!",
          "lable": [
            ""
          ],
          "view": 81,
          "img": "https://wspic.vod.nimo.tv/sg/live/338*190/su1639520766892r8a2e7947372b57a895903f313a306ab3.jpg?t=1654089600000",
          "avatar": "https://img.nimo.tv/t/1639520766892/202201051641389466931_1639520766892_avatar.png/w120_l0/img.png"
        },
        {
          "id": 3,
          "name": "Baz Kim",
          "content": "Ước được kẹo ngày QT Thiếu Nhi",
          "lable": [
            "PickMe"
          ],
          "view": "1K",
          "img": "https://img.nimo.tv/o/banner/B56FB3C0B769B74C202663F9C22E689C_5b3f3ef4f899c1b27948c9e045f461ab.jpg/w800_l0/img.jpg",
          "avatar": "https://img.nimo.tv/t/1659512911999/202112181639832771729_1659512911999_avatar.png/w120_l0/img.png"
        }
      ]
    },
    {
      "id": 6,
      "name": "Arena of Valor",
      "item": [
        {
          "id": 1,
          "name": "Pixel Gamer",
          "content": "Phát thẻ 1/6",
          "lable": [
            "skills"
          ],
          "view": "1.6k",
          "img": "https://img.nimo.tv/o/banner/FB4684FA27007939C867293ED5C851C3_af5519f3de1177c0e6ca40125adf99a7.jpg/w800_l0/img.jpg",
          "avatar": "https://img.nimo.tv/t/1599513806756/202107171626496593142_1599513806756_avatar.png/w120_l0/img.png"
        },
        {
          "id": 2,
          "name": "Sumiii",
          "content": "Ước được iu thương❤️",
          "lable": [
            "Bet"
          ],
          "view": 810,
          "img": "https://img.nimo.tv/o/banner/6739E79C5E1DFFEE275CA8A7DA805E2B_f15c4cf1c7e0858053e64cc4d097fe9c.jpg/w800_l0/img.jpg",
          "avatar": "https://img.nimo.tv/t/1599517528782/202205191652957667000_1599517528782_avatar.png/w120_l0/img.png"
        },
        {
          "id": 3,
          "name": "ThỏSu2k4",
          "content": "Lose hoài hỏng có zui. huhu",
          "lable": [
            ""
          ],
          "view": "1K",
          "img": "https://img.nimo.tv/o/banner/17E60E818F907F13BCB74379FECA229B_62d5b3456e220bcce1d10840bc0e32e4.jpg/w800_l0/img.jpg",
          "avatar": "https://img.nimo.tv/t/1629517707228/202205131652411797260_1629517707228_avatar.png/w120_l0/img.png"
        }
      ]
    },
    {
      "id": 7,
      "name": "PC/CONSOLE",
      "item": [
        {
          "id": 1,
          "name": "NGUYÊN",
          "content": "Buổi tối vv",
          "lable": [
            ""
          ],
          "view": 284,
          "img": "https://img.nimo.tv/o/banner/3FAD961B28F9E81AB00064B7E3C80AF7_f9b988ec9747d9f0a0182626936d9a71.jpg/w800_l0/img.jpg",
          "avatar": "https://img.nimo.tv/t/1629513549733/202110151634303439289_1629513549733_avatar.png/w120_l0/img.png"
        },
        {
          "id": 2,
          "name": "NhacNguyen",
          "content": "Hallo hallo",
          "lable": [
            ""
          ],
          "view": "2k",
          "img": "https://img.nimo.tv/o/banner/8E41BAD1CA4E4E5683884953008B872A_d57678fc514905777f0dd58502621fc4.jpg/w800_l0/img.jpg",
          "avatar": "https://img.nimo.tv/t/1599518072687/202202131644789823878_1599518072687_avatar.png/w120_l0/img.png"
        },
        {
          "id": 3,
          "name": "Jang Ka",
          "content": "THE SIEU GM x JANG KA",
          "lable": [
            ""
          ],
          "view": 544,
          "img": "https://img.nimo.tv/o/banner/621A2ADD8DFCEBEDF08E78495D447ABE_bdf8226454d9ccdba91c5719342f854c.png/w800_l0/img.png",
          "avatar": "https://img.nimo.tv/t/1629527307492/202203191647711642314_1629527307492_avatar.png/w120_l0/img.png"
        }
      ]
    },
    {
      "id": 8,
      "name": "AOV",
      "item": [
        {
          "id": 1,
          "name": "cus coin",
          "content": "NimoTV  Chan",
          "lable": [
            "Việt"
          ],
          "view": 684,
          "img": "https://img.nimo.tv/o/banner/486EE5E71BCBDB8606A6C05B8286E3A7_c1ce6c3ee206b5218ff97a9357a243c6.jpg/w800_l0/img.jpg",
          "avatar": "https://img.nimo.tv/t/1599517873490/202206071654639934340_1599517873490_avatar.png/w120_l0/img.png"
        },
        {
          "id": 2,
          "name": "Witch An",
          "content": "GU CỦA MÌNH LÀ ",
          "lable": [
            "skill"
          ],
          "view": "2k",
          "img": "https://img.nimo.tv/o/banner/D56C9E38FA19A9F7BE422E96AEE80119_4aa79d2d6a093178aac3072ab091a709.jpg/w800_l0/img.jpg",
          "avatar": "https://img.nimo.tv/t/1629526215735/202109291632892678466_1629526215735_avatar.png/w120_l0/img.png"
        },
        {
          "id": 3,
          "name": "Jang Ka",
          "content": "THE SIEU GM x JANG KA",
          "lable": [
            ""
          ],
          "view": 544,
          "img": "https://img.nimo.tv/o/banner/89722049AAC2A89D14B3C3DA962E12B9_1ae0067bd088df08d886c2783cec85cf.jpg/w800_l0/img.jpg",
          "avatar": "https://img.nimo.tv/t/1599516754101/202206141655191389715_1599516754101_avatar.png/w120_l0/img.png"
        }
      ]
    }
  ]
export default function Live() {

   


    return (
        <div className={style.main}>
            <div className={style.group}>
                <SideBar

                />
                
                <div className={style.live}>
                    <div className={style.headding}>
                        <h2>Live Now</h2>
                        <div className={style.live_group_select}>
                            <p>Choose country/region：</p>
                            <select id="country">
                                <option value="Global">Global</option>
                                <option value="Brazil">Brazil</option>
                                <option value="Viet Nam">Viet Nam</option>
                                <option value="Thai Lan">Thai Lan</option>
                            </select>
                        </div>
                    </div>
                    <ul className={style.main__list}>
                        {data && data.map(data => (
                            <LiveCard
                                key={data.id}
                                list={data.item}
                            />
                        ))}
                    </ul>
                </div>
                <div className={style.back}></div>
            </div>
        </div>
    )
}

