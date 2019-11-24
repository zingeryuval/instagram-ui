import React, {Component} from 'react';
import './Post.scss';
import TagList from "./TagList/TagList";
import Moment from 'react-moment';
import {faUserCircle, faHeart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


class Post extends Component {

    render() {
        return (
            <div className="Post">
                <div className="card" style={{width: '400px', height: '550px'}}>
                    <header className="header">
                        <span>{this.props.id}</span>
                        <div><FontAwesomeIcon icon={faUserCircle} className="icon-user"/></div>
                    </header>
                    <img src={this.props.image} className="card-img-top" alt="#" />
                        <div className="card-body">
                            <p className="card-text">
                                {this.props.likes} <FontAwesomeIcon icon={faHeart} className="icon"/>
                            </p>
                            <p className="card-text-title">
                                {this.props.title}
                            </p>
                            <TagList tags={this.props.tags} />
                            <small className="text-muted">
                                Last updated
                                <Moment format=" HH:MM - MMM DD" unix>{this.props.created}</Moment>
                            </small>
                        </div>
                </div>
            </div>
        );
    }
}

export default Post;