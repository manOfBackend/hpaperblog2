import React from 'react';
import { useSelector } from 'react-redux';
import { RootReducerType } from '../reducers';
import SkillProps from './SkillProps';

const Skill = (): JSX.Element => {

    const { skills } = useSelector((state: RootReducerType) => state.Forms);

    return <> {
        <section>
            <div className="inner">
                <div className="skill-container" id="skill-container">
                    {skills.map((s, i) => {
                        return (
                            <div key={s.name + s.usage} className="skill">
                                <i className={s.iconValue}></i>
                                <div className="skill-title">
                                    <div className="skill-name">{s.name}</div>
                                    <div className="skill-usage">{s.usage}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>


    }</>

}

export default Skill;