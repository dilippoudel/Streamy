import React from 'react';
import { Field, reduxForm } from 'redux-form';
class StreamCreate extends React.Component {
	// renderInput(formProps) {
	//     console.log(formProps)
	// 	return (<input
	//     onChange = {formProps.input.onChange}
	//     value = {formProps.input.value}/>);
	// }

	// This is the alternate syntax for above method.
	// we destructure the input object and using spread operator, we pass all the properties of input to the input field.
	renderError({ error, touched }) {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	}
	renderInput = ({ input, label, meta }) => {
		//the Field component doesn't know about label that's why we need to pass in Field component. and destructure it in input field to show the label of input.
		
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off" />
				{this.renderError(meta)}
			</div>
		);
	};
	onSubmit(formValues) {
		console.log(formValues);
	}

	render() {
		return (
			// redux-form has its own handleSubmit method to handle the form submission.
			<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
				{/* Field component have "name" and "component" property. component may be any helper method or react component*/}
				<Field name="title" component={this.renderInput} label="Enter Title" />
				<Field name="description" component={this.renderInput} label="Enter Description" />
				<button className="ui primary button">Submit</button>
			</form>
		);
	}
}

const validate = formValues => {
	const errors = {};
	if (!formValues.title) {
		errors.title = 'You must enter a title.';
	}
	if (!formValues.description) {
		errors.description = 'You must enter a description.';
	}
	return errors;
};

// on like the connect funtion, reduxForm takes an object
export default reduxForm({
	form: 'streamCreate', // the name of this form is generally for the purpose of the form, name can be anything like: streamCreate or application or Application or Appli_cation and so on
	validate,
})(StreamCreate);
