import style from './App.module.scss';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./component/home/home.js";
import Live from "./component/live/live.js";
import Category from "./component/category/category.js";
import Esports from "./component/esports/esports.js";
import {  useState} from 'react';
import useLocalStorage from 'use-local-storage';
import Navigator from './component/navigator/navigator';
import Navigation from './component/navigation/navigation';
//npm install react-router-dom --save
//npm i sass

function App() {
 //assigning location variable
  // Check browser theme and save to localStorage
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  // Show/Hide setting list
  const [toggle, setToggle] = useState(false);
  // Change logo over theme
  const [logo, setLogo] = useLocalStorage('logo', `${style.nm_logo_df}`);
  //on Click change theme
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    theme === 'light' ? setLogo(style.nm_logo_df) : setLogo(style.nm_logo);
    setTheme(newTheme);
  }
 

  // Style range change over theme
  const styles = {
    logo: {
      transform: theme === 'light' ? "translateX(2px)" : "translateX(18.5px)",
    },
  }

  // 
  const data =
  {
    name: "Language",
    id: 1,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M448 164C459 164 468 172.1 468 184V188H528C539 188 548 196.1 548 208C548 219 539 228 528 228H526L524.4 232.5C515.5 256.1 501.9 279.1 484.7 297.9C485.6 298.4 486.5 298.1 487.4 299.5L506.3 310.8C515.8 316.5 518.8 328.8 513.1 338.3C507.5 347.8 495.2 350.8 485.7 345.1L466.8 333.8C462.4 331.1 457.1 328.3 453.7 325.3C443.2 332.8 431.8 339.3 419.8 344.7L416.1 346.3C406 350.8 394.2 346.2 389.7 336.1C385.2 326 389.8 314.2 399.9 309.7L403.5 308.1C409.9 305.2 416.1 301.1 422 298.3L409.9 286.1C402 278.3 402 265.7 409.9 257.9C417.7 250 430.3 250 438.1 257.9L452.7 272.4L453.3 272.1C465.7 259.9 475.8 244.7 483.1 227.1H376C364.1 227.1 356 219 356 207.1C356 196.1 364.1 187.1 376 187.1H428V183.1C428 172.1 436.1 163.1 448 163.1L448 164zM160 233.2L179 276H140.1L160 233.2zM0 128C0 92.65 28.65 64 64 64H576C611.3 64 640 92.65 640 128V384C640 419.3 611.3 448 576 448H64C28.65 448 0 419.3 0 384V128zM320 384H576V128H320V384zM178.3 175.9C175.1 168.7 167.9 164 160 164C152.1 164 144.9 168.7 141.7 175.9L77.72 319.9C73.24 329.1 77.78 341.8 87.88 346.3C97.97 350.8 109.8 346.2 114.3 336.1L123.2 315.1H196.8L205.7 336.1C210.2 346.2 222 350.8 232.1 346.3C242.2 341.8 246.8 329.1 242.3 319.9L178.3 175.9z"/></svg>',
    countries: [{ name: "Viet Nam", id: "1", },
    { name: "English", id: "2", },
    { name: "中文 繁體", id: "3", },
    { name: "日本語", id: "4", },
    { name: "Bahasa Indonesia", id: "5", },
    { name: "Pilipinas", id: "6", },
    { name: "ภาษาไทย", id: "7", },
    { name: "Malaysia", id: "8", },
    { name: "Português", id: "9", },
    { name: "Español", id: "10", },
    { name: "हिन्दी", id: "11", },
    { name: "Türkçe", id: "12", },
    { name: "العربية", id: "13", },
    { name: "Русский", id: "14", },
    ]
  }

  data.countries.map(country => (
    <li>{country.name}</li>
  ))


  return (
    <BrowserRouter>
      <div id='top' data-theme={theme} className={style.App}>
        <h1>This app</h1>
        <div className={style.nimo__main}>
          <div className={style.nimo__nav}>
            <div className={style.nimo__nav_group}>
              <div className={style.nimo__nav_left}>
                <div className={style.nimo__nav_left_logo}>
                  <a className={logo} href='/nimo'>
                  </a>
                </div>
                <Navigation/>
              </div>
              <div className={style.nimo__nav_right}>
                <div className={style.nimo__nav_input}>
                  <input placeholder='Misthy' />

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
                  </svg>
                </div>
                <div className={style.nimo__nav_setting}
                  onClick={() => setToggle(!toggle)}
                >

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z" />
                  </svg>
                </div>
                {toggle &&
                  <div className={style.nimo__nav_setting_display}>
                    <ul className={style.nimo__nav_setting_list}>
                      <li className={style.nimo__nav_setting_item}>
                        <div className={style.nimo__nav_setting_icon}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M448 164C459 164 468 172.1 468 184V188H528C539 188 548 196.1 548 208C548 219 539 228 528 228H526L524.4 232.5C515.5 256.1 501.9 279.1 484.7 297.9C485.6 298.4 486.5 298.1 487.4 299.5L506.3 310.8C515.8 316.5 518.8 328.8 513.1 338.3C507.5 347.8 495.2 350.8 485.7 345.1L466.8 333.8C462.4 331.1 457.1 328.3 453.7 325.3C443.2 332.8 431.8 339.3 419.8 344.7L416.1 346.3C406 350.8 394.2 346.2 389.7 336.1C385.2 326 389.8 314.2 399.9 309.7L403.5 308.1C409.9 305.2 416.1 301.1 422 298.3L409.9 286.1C402 278.3 402 265.7 409.9 257.9C417.7 250 430.3 250 438.1 257.9L452.7 272.4L453.3 272.1C465.7 259.9 475.8 244.7 483.1 227.1H376C364.1 227.1 356 219 356 207.1C356 196.1 364.1 187.1 376 187.1H428V183.1C428 172.1 436.1 163.1 448 163.1L448 164zM160 233.2L179 276H140.1L160 233.2zM0 128C0 92.65 28.65 64 64 64H576C611.3 64 640 92.65 640 128V384C640 419.3 611.3 448 576 448H64C28.65 448 0 419.3 0 384V128zM320 384H576V128H320V384zM178.3 175.9C175.1 168.7 167.9 164 160 164C152.1 164 144.9 168.7 141.7 175.9L77.72 319.9C73.24 329.1 77.78 341.8 87.88 346.3C97.97 350.8 109.8 346.2 114.3 336.1L123.2 315.1H196.8L205.7 336.1C210.2 346.2 222 350.8 232.1 346.3C242.2 341.8 246.8 329.1 242.3 319.9L178.3 175.9z" /></svg>
                          <label>Language</label>
                        </div>
                        <div className={style.nimo__nav_setting_title}>
                          <span>English</span>
                        </div>
                      </li>
                      <li className={style.nimo__nav_setting_item}>
                        <div className={style.nimo__nav_setting_icon}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM57.71 192.1L67.07 209.4C75.36 223.9 88.99 234.6 105.1 239.2L162.1 255.7C180.2 260.6 192 276.3 192 294.2V334.1C192 345.1 198.2 355.1 208 359.1C217.8 364.9 224 374.9 224 385.9V424.9C224 440.5 238.9 451.7 253.9 447.4C270.1 442.8 282.5 429.1 286.6 413.7L289.4 402.5C293.6 385.6 304.6 371.1 319.7 362.4L327.8 357.8C342.8 349.3 352 333.4 352 316.1V307.9C352 295.1 346.9 282.9 337.9 273.9L334.1 270.1C325.1 261.1 312.8 255.1 300.1 255.1H256.1C245.9 255.1 234.9 253.1 225.2 247.6L190.7 227.8C186.4 225.4 183.1 221.4 181.6 216.7C178.4 207.1 182.7 196.7 191.7 192.1L197.7 189.2C204.3 185.9 211.9 185.3 218.1 187.7L242.2 195.4C250.3 198.1 259.3 195 264.1 187.9C268.8 180.8 268.3 171.5 262.9 165L249.3 148.8C239.3 136.8 239.4 119.3 249.6 107.5L265.3 89.12C274.1 78.85 275.5 64.16 268.8 52.42L266.4 48.26C262.1 48.09 259.5 48 256 48C163.1 48 84.4 108.9 57.71 192.1L57.71 192.1zM437.6 154.5L412 164.8C396.3 171.1 388.2 188.5 393.5 204.6L410.4 255.3C413.9 265.7 422.4 273.6 433 276.3L462.2 283.5C463.4 274.5 464 265.3 464 256C464 219.2 454.4 184.6 437.6 154.5H437.6z" /></svg>
                          <label>country/region</label>
                        </div>
                        <div className={`${style.nimo__nav_setting_position} ${style.nimo__nav_setting_title}`}>
                          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png' alt='' />
                        </div>
                      </li>
                      <li onClick={switchTheme} className={style.nimo__nav_setting_item}>
                        <div className={style.nimo__nav_setting_icon}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M342.7 352.7c5.75-9.625 9.25-20.75 9.25-32.75c0-35.25-28.75-64-63.1-64c-17.25 0-32.75 6.875-44.25 17.87C227.4 244.2 196.2 223.1 159.1 223.1c-53 0-96 43.06-96 96.06c0 2 .5029 3.687 .6279 5.687c-37.5 13-64.62 48.38-64.62 90.25C-.0048 468.1 42.99 512 95.99 512h239.1c44.25 0 79.1-35.75 79.1-80C415.1 390.1 383.7 356.2 342.7 352.7zM565.2 298.4c-93 17.75-178.5-53.62-178.5-147.6c0-54.25 28.1-104 76.12-130.9c7.375-4.125 5.375-15.12-2.75-16.63C448.4 1.125 436.7 0 424.1 0c-105.9 0-191.9 85.88-191.9 192c0 8.5 .625 16.75 1.75 25c5.875 4.25 11.62 8.875 16.75 14.25C262.1 226.5 275.2 224 287.1 224c52.88 0 95.1 43.13 95.1 96c0 3.625-.25 7.25-.625 10.75c23.62 10.75 42.37 29.5 53.5 52.5c54.38-3.375 103.7-29.25 137.1-70.37C579.2 306.4 573.5 296.8 565.2 298.4z" /></svg>
                          <label>Dark mode</label>
                        </div>
                        <div className={`${style.nimo__nav_setting_range} ${style.nimo__nav_setting_title}`}>
                          <div className={style.nimo__nav_setting_range_block}>
                            <div className={style.nimo__nav_setting_range_dot} style={styles.logo}>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={style.nimo__nav_setting_item}>
                        <div className={style.nimo__nav_setting_icon}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528 0h-480C21.5 0 0 21.5 0 48v320C0 394.5 21.5 416 48 416h192L224 464H152C138.8 464 128 474.8 128 488S138.8 512 152 512h272c13.25 0 24-10.75 24-24s-10.75-24-24-24H352L336 416h192c26.5 0 48-21.5 48-48v-320C576 21.5 554.5 0 528 0zM512 288H64V64h448V288z" /></svg>
                          <label>Add to desktop</label>
                        </div>

                      </li>
                      <li className={style.nimo__nav_setting_item}>
                        <div className={style.nimo__nav_setting_icon}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z" /></svg>
                          <label>Recharge</label>
                        </div>

                      </li>
                      <li className={style.nimo__nav_setting_item}>
                        <div className={style.nimo__nav_setting_icon}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z" /></svg>
                          <label>Live</label>
                        </div>

                      </li>
                      <li className={style.nimo__nav_setting_item}>
                        <div className={style.nimo__nav_setting_icon}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z" /></svg>
                          <label>Dowload App</label>
                        </div>

                      </li>
                      <li className={style.nimo__nav_setting_item}>
                        <div className={style.nimo__nav_setting_icon}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z" /></svg>
                          <label>History</label>
                        </div>

                      </li>
                      <li className={style.nimo__nav_setting_item}>
                        <div className={style.nimo__nav_setting_icon}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" /></svg>
                          <label>My Following</label>
                        </div>

                      </li>
                    </ul>
                  </div>
                }
                <div className={style.nimo__nav_btn}>
                  <div>
                    <button className={style.nimo__nav_btn_active}>Sign Up</button>
                  </div>
                  <div>
                    <button>Login</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={style.nimo__body}>
            <Routes>
              <Route path='/nimo' element={<Home />}></Route>
              <Route path='/live' element={<Live />}></Route>
              <Route path='/category' element={<Category />}></Route>
              <Route path='/esports' element={<Esports />}></Route>
            </Routes>
          </div>
          <Navigator />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
