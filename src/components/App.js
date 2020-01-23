import React, {Component} from 'react';
import Aux from '../UI/hoc/Auxiliary';
//import Layout from '../UI/Layout/Layout';
//import youtube from '../apis/youtube';
import VideoList from './VideoList';
import Search from '../components/Search/Search';
import axios from 'axios';



class App extends Component {
    state = {
        videos: []
    }
    onSearchSubmit = async (term) => {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyBkdRcbsuDMfxMJ214O7qYZivCYDzOlu3A',
                q: term
            }
        });
        console.log(response.data.items);
        this.setState({videos: response.data.items})   
    };

    render() {
        return(
            <Aux>
                <Search onSubmit={this.onSearchSubmit}/>
                <div style={{display:'flex', width: '90%', margin: '0px 50px'}}>
                    <div style={{width: '100%'}}>
                        <div>Video Renderer</div>
                        <div>Video Description</div> 
                    </div>
                    <div style={{width: '100%'}}>
                        <VideoList videos={this.state.videos}/>
                    </div>
                </div>
                
                 
            </Aux>
        );
    }
}

export default App;