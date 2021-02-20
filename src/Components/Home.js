import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import pokeball from '../pokeball.png';
import { connect } from 'react-redux';

class Home extends Component {
    // state = {
    //     posts: [ ]
    // }

    //once the component has been called ---> trigger componentDidMount()
    //then we get dummy data for API link using axios
    //set the component's state to replace with response data
    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => {
    //         console.log(res);
    //         this.setState({
    //             posts: res.data.slice(0,10)
    //         })
    //     }) 
    // }
    
    //map each of the array's object to have jsx format
    render(){
        console.log(this.props)
        const {posts} = this.props;
        const postList = posts.length ? (
            posts.map( p => {
                return(
                    <div className="post card" key={p.id}>
                        <img src={pokeball} alt="A school name"/>
                        <div className="card-content">
                            <Link to={'/' + p.id}>
                            <span className="card-title red-text">{p.title}</span>
                            </Link>
                            <p>{p.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No Posts yet!</div>
        )
        return(
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);