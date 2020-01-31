import React, { Component } from 'react';
import VideoCard from '../UI/VideoCard/VideoCard';


class VideoList extends Component {

    titleLength =(title)=> {
        const titleArr = title.split(' ');
        if (titleArr.length > 6) {
            return titleArr.splice(0, 7).join(' ') + ' ...';
        } else {
            return title
        }
    }

    linkDescCollector(link,desc){
        this.props.linkHandler(link, desc);
    }
    
    render() {
        return(
            this.props.videos.map(video => {
                return(
                    <div 
                        key={video.id.videoId} 
                        onClick={()=>this.linkDescCollector(video.id.videoId,video.snippet.description)}
                    >

                        <div style={{display: 'flex'}} >
                            <img style={{margin: '20px 15px'}} src={video.snippet.thumbnails.default.url} alt={video.snippet.title}/>
                            <h3>{this.titleLength(video.snippet.title)}</h3>
                        </div>
                    </div>
                );
            })
        );
    }
}

export default VideoList;
