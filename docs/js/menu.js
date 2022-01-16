ReactDOM.render(
    <div className="menubar_back">
        <div className="back_color"></div>
        <div className="ghost_left"></div>
        <div className="logo_back">
            <div className="logo">P</div>
            <div className="logo">ANOFF &nbsp;&nbsp;TRAVE</div>
            <div className="logo">L</div>
        </div>
        <div className="menu_back">
            <nav className="menu_burger" tabindex="1">
                <ul className="menu_list">
                    <div className="burger_line"><span className="flare"></span></div>
                    <div className="burger_line"><span className="flare"></span></div>
                    <div className="burger_line"><span className="flare"></span></div>
                    <li className="button">ABOUT US
                        <ul className="but_drop_list">
                            <li className="menu_but hidden"></li>
                            <li className="menu_but first">ОДИН</li>
                            <li className="menu_but">два</li>
                            <li className="menu_but">три</li>
                            <li className="menu_but">четыре</li>
                        </ul>
                    </li>
                    <li className="button">ARTICLES
                        <ul className="but_drop_list">
                            <li className="menu_but hidden"></li>
                            <li className="menu_but">БАЙКАЛ</li>
                            <li className="menu_but">АЛТАЙ</li>
                            <li className="menu_but">КАВКАЗ</li>
                        </ul>
                    </li>
                    <li className="button">FRIENDS
                        <ul className="but_drop_list">
                            <li className="menu_but hidden"></li>
                            <li className="menu_but"><a href="http://www.moto-travels.ru/">M-Travels</a></li>
                            <li className="menu_but"><a href="http://transalp-club.ru">TA-Club</a></li>
                            <li className="menu_but"><a href="http://www.africatwin.ru">AT-Club</a></li>
                        </ul>
                    </li>
                    <li className="button">LOG IN</li>
                </ul>
            </nav>
        </div>
        <div className="ghost_right"></div>
    </div>,
    document.querySelector("menubar_react")
);
