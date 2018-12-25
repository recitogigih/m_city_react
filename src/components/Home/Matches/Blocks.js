import React, { Component } from 'react';
import { firebaseMatches} from '../../../Firebase';
import {firebaseLooper, reverseArray} from '../../ui/misc';
class Blocks extends Component {

    state = {
        matches:[
        ]
    }

    componentDidMount(){
        firebaseMatches.limitToLast(6).once('value').then((snapshot)=> {
            const matches = firebaseLooper(snapshot);
            console.log(matches)

            this.setState({
                matches: reverseArray(matches)
            })
        })
    }

    showMatches = () => (
        <div>
            Match
        </div>
    )

    render() {
        console.log(this.state)
        return (
            <div className="home_matches">
                {this.showMatches(this.state.matches)}
                
            </div>
        );
    }
}

export default Blocks;