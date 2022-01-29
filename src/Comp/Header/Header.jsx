import React from 'react';
import NavBar from './NavBar';

function Header({Name,KanjiClass,KatakanaClass,HiraganaClass,HomeClass,KanjiClick,HiraganaClick,KatakanaClick,HomeClick, SettingsClick,SettingsClass}) {
    return (
        <header>
            <div className="Header">
                <h1 className='HeaderText'>{Name}</h1>
                <NavBar SettingsClass={SettingsClass} SettingsClick={SettingsClick} KanjiClass={KanjiClass} KanjiClick={KanjiClick} HomeClick={HomeClick} HomeClass={HomeClass} HiraganaClick={HiraganaClick} HiraganaClass={HiraganaClass} KatakanaClass={KatakanaClass} KatakanaClick={KatakanaClick}/>
            </div>
        </header>
    );
}
export default Header;
