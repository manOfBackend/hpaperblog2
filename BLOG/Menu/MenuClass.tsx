import React from 'react';
import { useSelector } from 'react-redux';
import { RootReducerType } from '../reducers';
import MenuProps from './MenuProps';

const Menu = (): JSX.Element => {
    
    const { menus } = useSelector((state: RootReducerType) => state.Forms);


    return <>{
        <header>
            <div className="inner">
                <div className="head-container">
                    {menus.map((m, i) => {
                        return (
                            <div key={m.name} className={m.className}><a href={m.href}>{m.name}</a></div>
                        );
                    })}
                </div>

            </div>
        </header>

    }
    </>
}

export default Menu;