import React, {Component, Fragment} from 'react';
import './LifeCycleComp.css'
import {connect} from 'react-redux';

class LifeCycleComp extends Component{

    constructor(props){
        super(props);
        this.state = {
            count: 1
        }
    }

    static getDerivedStateFromProps(props,state){

    }

    componentDidMount(){
        console.log('componentDidMount')
            // setTimeout(() =>{
            //     this.setState({
            //         count: 2
            //     })
            // },5000)
    }

    shouldComponentUpdate(nextProps, nextState){
        console.group('shouldComponentUpdate')
        // console.log('nextProps', nextProps);
        console.log('nextState', nextState);
        console.log('this state: ', this.state);
        console.groupEnd();
        if(nextState.count >= 4){
            return false;
        }
        return true;
    }

    changeCount = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return(
        <Fragment>
        <button className="btn" onClick={this.changeCount}>Component Button {this.state.count}</button>
        
    <p>Total order: {this.props.order}</p>
        </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return{
    order: state.totalOrder
    }
}

export default connect(mapStateToProps)(LifeCycleComp); 