import style from "./proteam.module.scss";
import {useEffect, useRef, useState} from "react";

const listData = [
    {
        id:1,
        name: "Team GOD",
        content: "Team Competitivo Region: Sur / Norte",
        img: "https://img.nimo.tv/o/banner/42F04521FB82E3237194393E48315D90_d3688afbc816aaf948e8199cc66b2522.jpg/w680_l0/img.jpg",
        avatar: "https://img.nimo.tv/o/banner/DB824B59D87705CEB8B2E5075CEE70F4_598896c9fabd9e0d53759f1675ae1751.jpg/w180_l0/img.jpg"
    },
    {
        id:2,
        name: "S8ul",
        content: "Indian NO.1 Team",
        img: "https://img.nimo.tv/o/banner/1AF04E0156E0F9B5AC4EB982FF189945_c9fde492bb3a5a83d70c126e8b7f8808.jpg/w680_l0/img.jpg",
        avatar: "https://img.nimo.tv/o/banner/297864DBCF1038EB3B0A58B2A005A403_4832fff10d6a003591cc8ed605ffdf76.jpg/w180_l0/img.jpg"
    },
    {
        id:3,
        name: "Valencia CF Esports",
        content: "Professional Thailand RoV E-sports Team",
        img: "https://img.nimo.tv/o/banner/66FDFAC5EDEF7CD99C13D7BFEE60C8B1_c88326411cacf54388dd51e2b20c72a2.png/w680_l0/img.png",
        avatar: "https://img.nimo.tv/o/banner/D3B93CBC117ACAF01FD9E4227DF3B226_34eed023c30c59973935f2bb18f09378.png/w180_l0/img.png"
    },
    {
        id:4,
        name: "ONIC ESPORTS",
        content: "ONIC Esports is a Professional e-Sports Management Team founded in 26th July 2018. ONIC was built in belief where we see the future of entertainment is e-sports. E-sports scene in Indonesia is only at its early stage, and ONIC is here to step up the game with the spirit to be the best e-sports organisation in South East Asia. We manage talents and treat them like our own family and the best of all, make them shine with the best version of their self.",
        img: "https://img.nimo.tv/o/banner/9CE060027F68817F699D2E9AA22CDA41_6ec6d14f65f2d8a8e80fd4db65b3a966.jpg/w680_l0/img.jpg",
        avatar: "https://img.nimo.tv/o/banner/7C82BF4D03D0DD952752DC903EE9DB75_531db1e2a59c3c5e87d2e54136fe7065.png/w180_l0/img.png"
    },
    {
        id:5,
        name: "EVOS ESPORT",
        content: "EVOS is a professional esports organization operated in Southeast Asia. Formed in 2016, they are best known for winning the first Mobile Legends World Championship 2019 and the Free Fire World Cup 2019 tournaments. In addition to their unparalleled trophy collection, EVOS also the most successful esports brand in the region, gaining the support from over 3 million fans across Indonesia, Thailand, Vietnam Singapore, and Malaysia.",
        img: "https://img.nimo.tv/o/banner/D4BC71E2A7A08D4632EB35ECFE59071B_65e11a061e85c4b9367a6477bb08a6ba.png/w680_l0/img.png",
        avatar: "https://img.nimo.tv/o/banner/1E28602D78CA4BDB47EE85B725F752E7_1311e3232d548e7f7d522999671b9c7c.png/w180_l0/img.png"
    },
    {
        id:6,
        name: "RVNG",
        content: "Revenge PUBGM team",
        img: "https://img.nimo.tv/o/banner/BCFF6BC426A571934D1ACD0397F8D474_746c2d19006fbfb14a9d993f5c58fa0c.jpg/w680_l0/img.jpg",
        avatar: "https://img.nimo.tv/o/banner/208134BD5230E073878B57FB628FA26B_4832fff10d6a003591cc8ed605ffdf76.jpg/w180_l0/img.jpg"
    },
]
function ProTeam() {

    const [index , setIndex] = useState(0);
    const list = listData.length;
    const prevI = useRef();
    const nextI = useRef();
 
    const Prev = () => {

        setIndex(index === 0 ?  index  : index - 1);
    }

    const Next = ()=>{
        setIndex(index < list - 1 ? index + 1 : index);
        
    }

    useEffect(()=>{

        const x = index === 0 ? 
        prevI.current.style.cursor = "no-drop" :
        prevI.current.style.cursor = "pointer";

        const y = index < list - 1 ? 
        nextI.current.style.cursor = "pointer" :
        nextI.current.style.cursor = "no-drop";
        console.log(x,y);

    },[index,list])

    return (
        <div className={style.main}>
            <div className={style.headding}>
                <h1>Pro Team</h1>
                <div className={style.headding_svg}>
                    <span ref={prevI} onClick={Prev}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" /></svg>
                    </span>
                    <span ref={nextI} onClick={Next}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" /></svg>
                    </span>
                </div>
            </div>
            <div className={style.slide}>
                <div className={style.slide_container}>
                    <ul style={{transform:`translateX(-${index * 624}px)`}} className={style.slide_list}>
                        {listData.map(item => (
                            <li key={item.id} className={style.slide_item}>
                                <a className={style.slide_link} href='#!'>
                                    <div className={style.slide_description}>
                                        <p>{item.content}</p>
                                    </div>
                                    <div className={style.slide_cover}>
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className={style.slide_banner}>
                                        <div className={style.slide_banner_container}>
                                            <div className={style.avatar}>
                                                <img src={item.avatar} alt="" />
                                            </div>
                                            <div className={style.team_name}>
                                                <h1>{item.name}</h1>
                                            </div>
                                            <div className={style.arrow}>

                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProTeam;