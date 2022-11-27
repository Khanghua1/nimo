import style from './livecard.module.scss';


function LiveCard({ list }) {



    return (
        <>
            {list.map(data => (
                <li key={data.id} className={style.main__item}>
                    <a className={style.main__link} href="#!">
                        <div className={style.main__img}>
                            <img src={data.img} alt="" />
                            <div className={style.hover}>
                                <div className={style.overlay}></div>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" /></svg>
                                </span>
                            </div>
                        </div>

                    </a>
                    <div className={style.main__card}>
                        <div className={style.main__card_avatar}>
                            <img src={data.avatar} alt="" />
                        </div>
                        <div className={style.main__card_group}>
                            <div className={style.main__card_mid}>
                                <a href="#!">
                                    <h2>{data.content}</h2>
                                </a>
                                <a href="#!">
                                    <span>{data.name}</span>
                                </a>
                                <div>
                                    {data.lable.map((data) => (
                                        data && <label key={data}>{data}</label>
                                    ))}
                                </div>
                            </div>
                            <div className={style.main__card_view}>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z" /></svg>
                                </span>
                                <p>{data.view}</p>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </>
    )
}


export default LiveCard;