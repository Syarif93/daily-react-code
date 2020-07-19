import React, { useState } from 'react';
import './DetailsCard.scss';
import { DetailsContent, TutorialsContent, CodeContent } from './Content';
import { CSSTransition } from 'react-transition-group';

const Card = () => {
    const [detail, setDetail] = useState(true);
    const [tutorials, setTutorials] = useState(false);
    const [code, setCode] = useState(false)

    return(
        <div className="card">
            <div className="nav">
                <ul className="nav-items">
                    <li className="nav-item">
                        <a href="#" className={detail === true ? 'active' : null} onClick={
                            () => setDetail(true) | setTutorials(false) | setCode(false)
                        }>
                            Details
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className={tutorials === true ? 'active' : null} onClick={
                            () => setTutorials(true) | setCode(false) | setDetail(false)
                        }>
                            tutiroals
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className={code === true ? 'active' : null} onClick={
                            () => setCode(true) | setDetail(false) | setTutorials(false)
                        }>
                            code
                        </a>
                    </li>
                </ul>
            </div>
            <div className="content">
                <CSSTransition in={detail} timeout={500} classNames="details" unmountOnExit>
                    <DetailsContent />
                </CSSTransition>
                <CSSTransition in={tutorials} timeout={500} classNames="tutorials" unmountOnExit>
                    <TutorialsContent />
                </CSSTransition>
                <CSSTransition in={code} timeout={500} classNames="codes" unmountOnExit>
                    <CodeContent />
                </CSSTransition>
            </div>
        </div>
    )
}

const DetailsCard = () => {
    return (
        <div className="cards">
            <Card />
        </div>
    )
}

export default DetailsCard
