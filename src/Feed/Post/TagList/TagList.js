import React, {Component} from 'react';
import Post from "../Post";
import './TagList.scss';

class TagList extends Component {
    render() {
        return (
            <div className="TagList">
                {this.props.tags.map(tag => {
                    return <div className="tag"> #{tag}</div>
                })}
            </div>
        );
    }
}

export default TagList;