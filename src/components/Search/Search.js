import React, {Component} from 'react';


class Search extends Component {
    state={term: ''}

    onFormSubmitHandler=(event)=> {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render() {
        return(
            <div className="ui segment" style={{margin: '20px 50px'}}>
                <form className="ui form" onSubmit={this.onFormSubmitHandler}>
                    <div className="field"> 
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e=>this.setState({term: e.target.value})}
                        />   
                    </div>
                    <p>{this.state.term}</p>
                </form>
            </div>
        );
    }
}

export default Search;