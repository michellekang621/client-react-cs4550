import React from "react";

export class LessonTabsContainer extends React.Component {

    state = {

    }

    render() {
        return (
            <ul className="nav nav-tabs">
                {this.props.lessons.map((lesson, key) =>
                    <li className="nav-item"
                        onClick={() => this.props.selectLesson(lesson)}
                        key={key}>
                        <a className={lesson === this.props.selectedLesson ? "nav-link active" : "nav-link"}>
                            {lesson.title}
                        </a>
                    </li>
                )}
            </ul>
        )
    }

}