import React, {Component} from 'react';
import Aux from '../UI/hoc/Auxiliary';
//import Layout from '../UI/Layout/Layout';
//import youtube from '../apis/youtube';
import VideoList from './VideoList';
import Search from '../components/Search/Search';
import Description from '../components/Description/Description';
import Video from '../components/Video/Video';
import axios from 'axios';



class App extends Component {
    state = {
        videos: [],
        link: '',
        description: ''
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
        this.setState({videos: response.data.items})
        console.log(response.data.items);
           
    };

    linkDescriptionHandler=(link, desc)=>{
        this.setState({link: link});
        this.setState({description: desc});
    }

    render() {
        console.log(this.state.link);
        console.log(this.state.description);
        
        return(
            <Aux>
                <Search onSubmit={this.onSearchSubmit}/>
                <div style={{display:'flex', width: '90%', margin: '0px 50px'}}>
                    <div style={{width: '100%'}}>
                        <Video link={this.state.link}/>
                        <Description description={this.state.description}/>
                    </div>
                    <div style={{width: '100%'}}>
                        <VideoList 
                            videos={this.state.videos}
                            linkHandler={this.linkDescriptionHandler}/>
                    </div>
                </div>     
            </Aux>
        );
    }
}

export default App;