import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar'

// Progress Bar component for the quiz to keep track of number of qs answered
export class Progress extends React.Component {
    

    render() {
        return (
            <Container>
                <Row>
                    <h3> {this.props.type} {this.props.curr}/{this.props.total} </h3>
                </Row>
                <Row>
                    <ProgressBar animated variant="info"  now={(this.props.curr/this.props.total)*100} />
                </Row>
            </Container>
        )
    }
}

export default Progress;