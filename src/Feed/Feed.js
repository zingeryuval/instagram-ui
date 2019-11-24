import React, {Component} from 'react';
import './Feed.scss';
import Post from "./Post/Post";
import FadeLoader from 'react-spinners/FadeLoader';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: false
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        fetch("https://my-json-server.typicode.com/evyros/fake-api/posts")
            .then(res => res.json())
            .then(posts=>this.setState({posts, loading: false}))
    }
    render() {
        return (
            <div className="Feed">
                <div className="loading">
                    {this.state.loading ?
                        <div>
                            <FadeLoader
                                sizeUnit={"px"}
                                color={'#2ebd9e'}
                                size={50}
                                margin={2}
                                height={15}
                                width={5}
                                radius={2}
                                loading={this.state.loading}/>
                            <div>Loading...</div>
                        </div> : null
                    }

                </div>
                <div className="container">
                    {this.state.posts.map(post => {
                        return (
                                <Post
                                    id={post.id}
                                    created={Number(post.created)}
                                    image={post.image}
                                    title={post.title}
                                    tags={post.tags}
                                    likes={post.likes}
                                />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Feed;