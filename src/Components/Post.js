import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { deletePost } from '../Actions/postAction';

class Post extends Component {
    // state = {
    //     post: null
    // }
    // componentDidMount(){
    //     console.log(this.props);
    //     let id = this.props.match.params.post_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //     .then(res => {
    //         this.setState({
    //             post: res.data
    //         })
    //     })
    // }

    handleClick = () => {
        console.log(this.props)
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/')
    }
    render(){
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        DELETE POST</button>
                </div>
            </div>
        ) : (
            <div className="center">Loading post....</div>
        )
        return(
            <div className="container">
                { post }
            </div>
        )
    }
}

//to read data from the states and 
//to get single individual record for blog
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return{
        post: state.posts.find(post => post.id === id)
    }
}

//to update/delete state --> use mapDisptachToProps()
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {dispatch(deletePost(id))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);