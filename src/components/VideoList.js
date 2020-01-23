import React, { Component } from 'react';
import VideoCard from '../UI/VideoCard/VideoCard';

class VideoList extends Component {
    titleLength =(title)=> {
        const titleArr = title.split(' ');
        if (titleArr.length > 6) {
            return titleArr.splice(0, 7).join('') + '...';
        } else {
            return title
        }
    }
    render() {
        return(
            this.props.videos.map(video => {
                return(
                    <VideoCard key={video.id.videoId}>
                        <div style={{display: 'flex'}}>
                            <img style={{margin: '20px 15px'}} src={video.snippet.thumbnails.default.url} alt={video.snippet.title}/>
                            <h3>{this.titleLength(video.snippet.title)}</h3>
                        </div>
                    </VideoCard>
                );
            })
        );
    }
}

export default VideoList;
