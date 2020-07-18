import React from 'react';
import './Content.scss';
import {IoIosArrowForward} from 'react-icons/io';

export const DetailsContent = () => {
    return (
        <div className="detail-wrapper">
            <h4 className="title">Color Palette</h4>
            <span className="desc">Click on the color to copy code.</span>
            <div className="colors">
                <ul className="color-items">
                    <li><span></span> #BAC4E0</li>
                    <li><span></span> #E9EFFD</li>
                    <li><span></span> #F2F3F6</li>
                    <li><span></span> #8F95A7</li>
                    <li><span></span> #5282F6</li>
                    <li><span></span> #222E4E</li>
                </ul>
            </div>
            <div className="fonts">
                <h4>Fonts</h4>
                <div className="font-list">
                    <span>Muli Regular</span>
                    <span>Muli Bold</span>
                </div>
            </div>
        </div>
    )
}

export const TutorialsContent = () => {
    return(
        <div className="tutorials-wrapper">
            <h4 className="title">Tutorials</h4>
            <span className="desc">Learn how to build this component.</span>
            <div className="skill">
                <h5 className="skill-title">HTML/CSS</h5>
                <div className="links">
                    <div className="link">
                        <a href="https://www.youtube.com/watch?v=0oIWW5piQcs" target="_blank">
                            <div className="user">
                                <h4>Andrew Gabriel</h4>
                                <IoIosArrowForward />
                            </div>
                            <span>https://www.youtube.com/watch?v=0oIWW5piQcs</span>
                        </a>
                    </div>
                    <div className="link">
                        <a href="https://www.youtube.com/watch?v=0oIWW5piQcs" target="_blank">
                            <div className="user">
                                <h4>Shanghai Raj</h4>
                                <IoIosArrowForward />
                            </div>
                            <span>https://www.youtube.com/watch?v=dgJTUa7WgjI</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="skill">
                <h5 className="skill-title">React Native</h5>
                <div className="links">
                    <div className="link">
                        <a href="https://www.youtube.com/watch?v=0oIWW5piQcs" target="_blank">
                            <div className="user">
                                <h4>Jason Brown</h4>
                                <IoIosArrowForward />
                            </div>
                            <span>https://codedaily.io/tutorials/177/Create-an-Animated-Product-Review-Display-with-React-Native</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="text">
                <p>Did you make a tutorial with this component? <a href="#">Send your link</a> and we will post it here.</p>
            </div>
        </div>
    )
}

export const CodeContent = () => {
    return (
        <div className="code-wrapper">
            <h4 className="title">Code snippets</h4>
            <span className="desc">Inspect the solutions others implemented.</span>
            <div className="link">
                <a href="https://www.youtube.com/watch?v=0oIWW5piQcs" target="_blank">
                    <div className="user">
                        <h4>Stefan Galescu</h4>
                        <IoIosArrowForward />
                    </div>
                    <span>https://codepen.io/stefan-galescu/pen/OJMNvPp</span>
                </a>
            </div>
            <div className="link">
                <a href="https://www.youtube.com/watch?v=0oIWW5piQcs" target="_blank">
                    <div className="user">
                        <h4>frederic</h4>
                        <IoIosArrowForward />
                    </div>
                    <span>https://codepen.io/fede19/pen/MWKOarZ</span>
                </a>
            </div>
            <div className="text">
                <p>Did you build this component? <a href="#">Send your link</a> and we will post it here.</p>
            </div>
        </div>
    )
}
