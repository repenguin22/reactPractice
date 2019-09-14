import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
    componentDidMount() {
        if (!this.props.stream) {
            this.props.fetchStream(this.props.match.params.id);
        }
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues);
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading</div>;
        }
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm initialValues={_.pick(this.props.stream, 'title', 'description')} onSubmit={this.onSubmit} />
            </div>
        );
    }
}

const mapToStateProps = (state, props) => {
    return {
        stream: state.streams[props.match.params.id]
    };
};

export default connect(mapToStateProps, { fetchStream, editStream })(StreamEdit);