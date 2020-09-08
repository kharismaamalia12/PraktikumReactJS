import React, {Component} from 'react';
import './App.css';
import Media from './Components/Media';

class App extends Component {
    render(){
        return(
            <div>
                <Media image="react.png" tittle="React JS">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante solicitudin. Cras purus odio, vestibulum
                    in vulputate at, tepus viverra turpin
                </Media>
                <Media image="angular.png" tittle="Angular JS">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante solicitudin. Cras purus odio, vestibulum
                    in vulputate at, tepus viverra turpin
                </Media>
            </div>
        );
    }
}
export default App;