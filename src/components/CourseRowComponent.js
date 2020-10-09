import React from "react";
import {Link} from "react-router-dom";
import {updateCourse} from "../services/CourseService";

export class CourseRowComponent extends React.Component {

    state = {
        editing: false,
        courseTitle: "",
        course: this.props.course
    }

    updateTitle = (event) => {
        const newTitle = event.target.value
        const course = {...this.state.course}
        course.title = newTitle
        this.setState({
            course: course
        })
    }

    updateCourse = () => {
        this.setState({editing:false})
        updateCourse(this.state.course._id, this.state.course)
    }



    render() {
        return(
            <tr>
                <td>
                    {
                        this.state.editing === true &&
                        <input
                            onChange={this.updateTitle}
                            value={this.state.course.title}/>
                    }
                    {
                        this.state.editing === false &&
                        <Link to={`/edit/${this.state.course._id}`}>
                            {this.state.course.title}
                        </Link>
                    }
                </td>
                <td>{this.props.course.owner}</td>
                <td>{this.props.course.lastUpdated}</td>
                <td>
                    <i onClick={() => this.props.deleteCourse(this.props.course)}
                       className="fas fa-trash-alt float-right"
                       style="margin-right:15px"></i>
                    {
                        !this.state.editing &&
                            <i onClick={() => this.setState({editing:true})}
                               className="far fa-edit float-right"></i>
                    }
                    {
                        this.state.editing &&
                        <i onClick={this.updateCourse}
                        className="far fa-check-square"></i>
                    }
                </td>
            </tr>
        )
    }
}

