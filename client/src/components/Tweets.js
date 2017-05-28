import React, { Component } from 'react';
import { Header, Form, List, Icon } from 'semantic-ui-react';

class Tweets extends Component { 
    state = { tweets: [], handle: '' };


    getTweets = (e) => {
        //make a fetch call to our express server
        //our express server is going to make the api call to twitter
        //our express server is going to return the JSON form twitter
        e.preventDefault();
        let { handle } = this.state;
        fetch(`/api/tweets/${handle}`)
            .then( res => res.json() )
            .then( tweets => this.setState({ tweets, handle: '' }));
    }

    tweets = () => {
        //display the UI for the tweets in state
    }

    render() {
        let { handle } = this.state;
        return(
            <div>
                <Header as='h3' textAlign='center'>Tweets</Header>
                <Form onSubmit={this.getTweets}>
                    <Form.Input 
                        label='Twitter Handle'
                        value={handle}
                        onChange={e => this.setState({ handle: e.target.value })}
                    />
                </Form>
                <List divided relaxed>
                    { this.tweets() }
                </List>
            </div>
        );
    }
}

export default Tweets;