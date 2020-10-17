import React from "react";
import LessonTabsComponent from "../components/LessonTabsComponent";
import ModuleListComponent from "../components/ModuleListComponent";
import TopicPillsComponent from "../components/TopicPillsComponent";

export class CourseEditorContainer extends React.Component{

    render() {
        return(
            <div className="element-color">
                <h1>CourseEditor</h1>
                <div className="row">
                    <div className="col-4">
                        <ModuleListComponent/>
                    </div>
                    <div className="col-8">
                        <LessonTabsComponent/>
                        <TopicPillsComponent/>
                    </div>
                </div>
            </div>
        )
    }
}