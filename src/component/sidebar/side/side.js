import style from "../sidebar.module.scss"


function Side({list}) {


    return (
        <>
            {list && list.map(item => (
                <li key={item.id} className={`${style.item} ${style.active}`}>
                    <a className={style.link} href="#!">
                        {item.url}
                    </a>
                </li>
            ))}
            <div className={style.item_group}>
                <li className={style.item}>
                    <a className={style.link} href="#!">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256s-114.6-256-256-256C114.6 0 0 114.6 0 256S114.6 512 256 512zM129.2 265.9C131.7 259.9 137.5 256 144 256h64V160c0-17.67 14.33-32 32-32h32c17.67 0 32 14.33 32 32v96h64c6.469 0 12.31 3.891 14.78 9.875c2.484 5.984 1.109 12.86-3.469 17.44l-112 112c-6.248 6.248-16.38 6.248-22.62 0l-112-112C128.1 278.7 126.7 271.9 129.2 265.9z" /></svg>
                    </a>
                </li>
                <li className={style.item}>
                    <a className={style.link} href="#!">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" /></svg>
                    </a>
                </li>
            </div>
        </>
    )
}

export default Side;