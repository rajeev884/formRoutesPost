import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
import {Card, CardTitle} from 'material-ui/Card';
import { createPost } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

class PostNew extends Component{
    constructor(props) {
        super(props);
        this.state = {
            formData: { title: '', categories: '',  content:''  }
        };
    }
    handleChange(event) {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }
    onFormSubmit(event){
        event.preventDefault();
        this.props.createPost(this.state.formData);
    }
    render(){
        const { formData} = this.state;
        return(
            <div>
            <MuiThemeProvider> 
            <ValidatorForm ref="form"  onSubmit={(event)=>this.onFormSubmit(event)}  >
            <Card style={{marginTop:"15px"}}>
                <CardTitle title="Add a Post" />
                <TextValidator
                    floatingLabelText="Title"
                    name="title"
                    onChange={(event)=>this.handleChange(event)}
                    value={formData.title}
                    validators={['required']}
                    errorMessages={['This field is required']}
                    style={{marginLeft:"10px"}}
                /><br/>
                <TextValidator
                    floatingLabelText="Categories"
                    name="categories"
                    onChange={(event)=>this.handleChange(event)}
                    value={formData.categories}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    style={{marginLeft:"10px"}}
                /><br/>
                <TextValidator
                    floatingLabelText="Content"
                    name="content"  
                    onChange={(event)=>this.handleChange(event)}
                    value={formData.content}                  
                    validators={['required']}
                    errorMessages={['this field is required']}
                    style={{marginLeft:"10px"}}
                    multiLine={true}
                /><br/>
                <RaisedButton 
                    type='submit'
                    label="Submit"
                    primary={true}
                    style={{margin:"10px"}} 
                 />
                <Link to="/"> 
                <RaisedButton 
                    label="Cancel" 
                    secondary={true} 
                  />
                </Link>
            </Card>
            </ValidatorForm>
            </MuiThemeProvider>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({createPost},dispatch);
}
export default connect(null,mapDispatchToProps)(PostNew);