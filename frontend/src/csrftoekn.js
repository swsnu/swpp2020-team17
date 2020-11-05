import React, {Component, PropTypes} from 'react';
import CSRFToken from './csrftoken';
class ExampleForm extends Component {
    render() {
return (
<form action="/endpoint" method="post">
                <CSRFToken />
<button type="submit">Send</button> </form>
); }
}
export default ExampleForm;