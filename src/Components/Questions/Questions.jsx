import Copyright from "./Copyright";
import UserInfo from "./UserInfo";
import WorkExp from "./WorkExp";
import Skills from "./Skills";
import Education from "./Education";

export default function Questions(){
    return (
        <div className="QuestionsComponent">
            <Copyright />
            <UserInfo />
            <WorkExp />
            <Skills />
            <Education />
        </div>
    )
}