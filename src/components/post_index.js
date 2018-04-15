import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPosts } from "../actions/index";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
import {Card, CardTitle} from 'material-ui/Card';

class PostIndex extends Component{
    componentWillMount(){
        this.props.fetchPosts();

    }
    render(){
        return(
            <div>
            <MuiThemeProvider>
            <Card style={{marginTop:"15px"}}>
                <CardTitle title="List of bLOg Post" />
                <Link to="/post/new">
                <RaisedButton
                 label="Add Post" 
                 primary={true}  />
                 </Link>
            </Card>
            </MuiThemeProvider>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchPosts},dispatch);
}
export default connect(null,mapDispatchToProps)(PostIndex);