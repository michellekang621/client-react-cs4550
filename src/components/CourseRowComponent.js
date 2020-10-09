import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import {Link} from "react-router-dom";
import CourseService from "../services/CourseService";

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
        CourseService.updateCourse(this.state.course._id, this.state.course)
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
                       className="fa fa-trash float-right"/>
                    {
                        !this.state.editing &&
                            <i onClick={() => this.setState({editing: true})}
                               className="fa fa-edit float-right"/>
                    }
                    {
                        this.state.editing &&
                        <i onClick={this.updateCourse}
                           className="fa fa-check-square"/>
                    }
                </td>
            </tr>
        )
    }
}

