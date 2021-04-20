import React from 'react';
import { useSelector } from 'react-redux';
import { RootReducerType } from '../reducers';
import LearningProps from './LearningProps';

const Learning = (): JSX.Element => {

    const { learnings } = useSelector((state: RootReducerType) => state.Forms);

    return <>{
        <section>
            <div className="inner">
                <div className="roadmap-container">
                    <div className="roadmap-title-container">
                        <div className="roadmap-title">학습중인 책/강의 <span className="roadmap-desc"></span></div>
                        <div className="arrow-container">
                            <i className="fas fa-chevron-circle-left slide-prev"></i>
                            <i className="fas fa-chevron-circle-right slide-next"></i>
                        </div>
                    </div>
                    <ul className="class-list" data-position="0">
                        {learnings.map((p, i) => {
                            return (
                                <li className="class-card" key={p.imgSrc + p.href}>
                                    <img src={p.imgSrc} alt="HyeonPaper Blog" className="class-image" />
                                    <a href={p.href} target="_blank">
                                        <div className="class-container">
                                            <div className="class-skill">
                                                <div className="class-type">{p.type}</div>
                                                <div className="class-format">{p.format}</div>
                                            </div>
                                            <div className="class-desc">
                                                <div className="class-title">{p.title}</div>
                                                <div className="class-detail">{p.detail}</div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    }</>

}

export default Learning;