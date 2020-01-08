import React, {Component, Fragment} from 'react';
import Product from '../pages/Product/Product';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import BlogPost from '../pages/BlogPost/BlogPost';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';
import './Home.css';

class Home extends Component{
    state = {
        showComponent: true
    }
    
    componentDidMount(){

    }

    render(){
        return(
            <Router>
            <Fragment>
                <div className="navigation">
                    <Link to="/">Blog Post</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/lifecycle">LifeCycle</Link>
                </div>
                <Route path="/" exact component={BlogPost}/>
                <Route path="/product" component={Product}/>
                <Route path="/detail-post/:postID" component={DetailPost}/>
                <Route path="/lifecycle" component={LifeCycleComp} />  
            </Fragment>
            
            </Router>
        )
    }
}

export default Home;