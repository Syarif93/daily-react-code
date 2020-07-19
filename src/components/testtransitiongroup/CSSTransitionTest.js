import React, { useState } from 'react';
import './CSSTransitionTest.scss';
import { CSSTransition } from 'react-transition-group';

const CSSTransitionTest = () => {
    const [inProp, setInProp] = useState(false);

    return (
        <div>
            <CSSTransition in={inProp} timeout={500} classNames="my-node" unmountOnExit>
                <div>
                {"I'll receive my-node-* classes"}
                </div>
            </CSSTransition>
            <button type="button" onClick={() => setInProp(!inProp)}>
                Click to Enter
            </button>
        </div>
    )
}

export default CSSTransitionTest
