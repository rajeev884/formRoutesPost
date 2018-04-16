import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPosts } from "../actions/index";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
import {Card, CardTitle} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {yellow600} from 'material-ui/styles/colors';
class PostIndex extends Component{
    componentWillMount(){
        this.props.fetchPosts();
    }
    renderPosts(){
        return this.props.ReducerPostAll.map(item=>{
            return (
                <Link  key={item.id} to={`post/${item.id}`}>
                <ListItem
                    leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={yellow600} />}
                    primaryText={item.title}
                    secondaryText={item.categories}/>
                </Link>
                )
        })
    }
    render(){        
        return(
            <div>
            <MuiThemeProvider>
            <Card style={{margin:"15px",padding:"7px"}}>
                <CardTitle title="List of bLOg Post" />
                <Link to="/post/new"><RaisedButton label="Add Post" primary={true} className="pull-xs-right"/></Link>
                <Card style={{marginTop:"42px"}}>>
                <List>
                    {this.renderPosts()}
                </List>
                </Card>
            </Card>
            </MuiThemeProvider>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {ReducerPostAll:state.ReducerPost.all}
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchPosts},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(PostIndex);