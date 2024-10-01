import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./styles.css";

function App() {
    return (
        <div className="card">
            <Avatar imgSrc={"/photouse.jpg"} altText={"My photo"}/>
            <div className="data">
                <Intro heading={"Samir Dumre"}
                       data={"Frontend developer, Video Editor and CSIT Student. My hobbies are hiking, cycling and playing games. I live to exercise daily."} />
                {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
                <div className={"skill-list"}>
                <SkillList skill={"HTML + CSS"} emoji={"🦾"} backgroundColor={"#b1b1b1"} />
                <SkillList skill={"JavaScript"} emoji={"💪"} backgroundColor={"violet"} />
                <SkillList skill={"Git & Github"} emoji={"🦾"} backgroundColor={"cyan"} />
                <SkillList skill={"React"} emoji={"🦾"} backgroundColor={"skyblue"} />
                <SkillList skill={"Video Editing"} emoji={"🦾"} backgroundColor={"gray"} />
                <SkillList skill={"Video Editing"} emoji={"🦾"} backgroundColor={"gold"} />
                </div>
            </div>
        </div>
    );
}

function Avatar(props) {
    return (
        <img className={"avatar"} src={props.imgSrc} alt={props.altText}/>
    )
}

function Intro(props) {
    return (
        <span>
            <h1>{props.heading}</h1>
            <p>{props.data}</p>
        </span>
    )
}

function SkillList(props) {
    const skillStyle = {
        backgroundColor: props.backgroundColor
    }
    return (
            <p style={skillStyle} className={"skill"}>{props.skill} {props.emoji}</p>
    )
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);
