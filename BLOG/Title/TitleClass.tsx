import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootReducerType } from '../reducers';
import TitleProps from './TitleProps';

const Title = () => {

    const { title, message, str, setStr } = useSelector((state: RootReducerType) => state.Forms.title);

    const onChangeFunc = useCallback((e) => {

        setStr(e.target.value);
    }, [str]);

    return (
        <>
            <section className="main">
                <div className="main-container">
                    <div className="inner">
                        <div className="title-container" id="title-container">
                            <div className="title">{title}</div>
                            <input value={str} onChange={onChangeFunc} />
                            <div className="message">{message}</div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    );
}

export default Title;