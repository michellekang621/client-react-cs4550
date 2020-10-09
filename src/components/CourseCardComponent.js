import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import {Link} from "react-router-dom";
import CourseService, {updateCourse} from "../services/CourseService";


export class CourseCardComponent extends React.Component {
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
            <div className="card" styles={{width: '18rem'}}>
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>
                <div className="card-body">
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
                    <p className="card-text">{this.props.course.owner}</p>
                    <p className="card-text">{this.props.course.lastUpdated}</p>

                    <Link to={`/edit/${this.state.course._id}`}>More...</Link>
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
                </div>
            </div>
        )
    }
}

