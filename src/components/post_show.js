import React,{ Component ,PropTypes} from "react";
import { connect } from "react-redux";
import { fetchPostById,deletePost } from "../actions/index";
import {Card, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';

class PostShow extends Component{
    static contextTypes = {
        router:PropTypes.object
    };
    componentWillMount(){
        this.props.fetchPostById(this.props.params.id);
    }
    deletePost(){
        this.props.deletePost(this.props.params.id).then(()=>{
            this.context.router.push('/');
        }).catch(err=>console.log(err));;
    }
    render(){
        const {ReducerPostPost}=this.props;
        if(!ReducerPostPost){
            return <div>Loading....</div>
        }
        return(
            <div>
            <MuiThemeProvider> 
                <Card style={{margin:"15px",padding:"7px"}}>
                    <Link to="/">back to Index</Link>
                    <RaisedButton style={{float:"right"}} label="Delete" onClick={this.deletePost.bind(this)} secondary={true} />           
                    <CardTitle title={ReducerPostPost.title} subtitle={"Category:  "+ReducerPostPost.categories} />
                    <CardText>
                        {ReducerPostPost.content}
                    </CardText>
                </Card>
            </MuiThemeProvider> 
            </div>
        );
    }
}
function mapStateToProps(state){
    return {ReducerPostPost:state.ReducerPost.post}
}
export default connect(mapStateToProps,{fetchPostById,deletePost})(PostShow);