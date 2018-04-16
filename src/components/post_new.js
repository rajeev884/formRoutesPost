import React, { Component,PropTypes } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
import {Card, CardTitle} from 'material-ui/Card';
import { createPost } from "../actions/index";
import {reduxForm} from 'redux-form';
class PostNew extends Component{
    static contextTypes = {
        router:PropTypes.object
    };
    onSubmit(props){
        this.props.createPost(props).then(()=>{
            this.context.router.push('/');
        }).catch(err=>console.log(err));
    }
    
    render(){
        const {fields:{title,categories,content},handleSubmit}=this.props;
        // console.log(title);
        return(
            <div>
            <MuiThemeProvider>    
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Card style={{marginTop:"15px"}}>
                <CardTitle title="Add a Post" />
                <TextField
                 floatingLabelText="Title"
                 className="textfields"
                 {...title}
                 errorText={title.touched?title.error:''}
                 /><br/>
                <TextField
                 floatingLabelText="Categories"
                 className="textfields"
                 {...categories}
                 errorText={categories.touched?categories.error:''}
                 /><br/>
                <TextField
                 floatingLabelText="Content"
                 className="textfields"
                 multiLine={true}
                 {...content}
                 errorText={content.touched?content.error:''}
                 /><br/>
                <RaisedButton type='submit' label="Submit" primary={true} style={{margin:"10px"}} />
                <Link to="/"><RaisedButton label="Cancel"  secondary={true}  /></Link>
            </Card>
            </form>
            </MuiThemeProvider>
            </div>
        )
    }
}
function validate(values){
    const errors={};
    if(!values.title){
        errors.title="Title is required"
    }
    if(!values.categories){
        errors.categories="Categories is required"
    }
    if(!values.content){
        errors.content="Content is required"
    }
    return errors;
}
export default reduxForm({
    form:'postnewform',
    fields:['title','categories','content'],
    validate
},null,{createPost})(PostNew);