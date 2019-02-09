import React from 'react';
import {Field, reduxForm} from 'redux-form';
class StreamCreate extends React.Component {
    render(){
        // reduxForm has bunch of propery.
        console.log(this.props);
        return(
            <div>
                StreamCreate
            </div>
        )
    }
}
// on like the connect funtion, reduxForm takes an object
export default reduxForm({
    form: 'streamCreate' // the name of this form is generally for the purpose of the form, name can be anything like: streamCreate or application or Application or Appli_cation and so on
})(StreamCreate);