import React from "react";

export class TopicPillsContainer extends React.Component {
    render() {
        return(
            <div>
                {this.props.topics.map((topic) => <a className="pad-element">{topic.title}</a>)}
            </div>
        )
    }
}