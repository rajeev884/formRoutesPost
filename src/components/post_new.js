import React, { Component,PropTypes } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
import {Card, CardTitle} from 'material-ui/Card';
import { createPost } from "../actions/index";
import {reduxForm} from 'redux-form';
import _ from 'lodash';
const FIELDS={
    title:{
        type:'text',
        label:'Title'
    },
    categories:{
        type:'text',
        label:'Categories'
    },
    content:{
        type:'text',
        label:'Content'
    }
};
class PostNew extends Component{
    static contextTypes = {
        router:PropTypes.object
    };
    onSubmit(props){
        this.props.createPost(props).then(()=>{
            this.context.router.push('/');
        }).catch(err=>console.log(err));
    }
    renderFields(fieldConfig,field){
        const fieldHelper=this.props.fields[field];
       // console.log(fieldConfig,'<fieldConfig',field,'<field',fieldHelper);

        return(<div><TextField
            floatingLabelText={fieldConfig.label}
            className="textfields"
            {...fieldHelper}
            errorText={fieldHelper.touched?fieldHelper.error:''}
            multiLine={fieldHelper.name=='content'?true:false}
            /><br/></div>);

    }
    render(){
        const {handleSubmit}=this.props;
        return(
            <div>
            <MuiThemeProvider>    
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Card style={{marginTop:"15px"}}>
                <CardTitle title="Add a Post" />
                {_.map(FIELDS,this.renderFields.bind(this))}
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
    _.each(FIELDS,(type,field)=>{
       // console.log(values,'vall',type,'typp',field);
        if(!values[field]){
            errors[field]=`enter a ${field}`
        }
    })
    return errors;
}
export default reduxForm({
    form:'postnewform',
    fields:_.keys(FIELDS),
    validate
},null,{createPost})(PostNew);