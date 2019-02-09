import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import Header from './header';

const App = () => {
    return(
        <div className = "ui container" style = {{paddingTop:20}}>
        <BrowserRouter>
        <div>
        <Header/>
            <Route  path = "/" exact component = {StreamList} />
            <Route path = "/streams/new" exact render= {()=> <StreamCreate/>} />
              {/* when the component is connected to redux-form, the function need to pass in Route, but it takes an normal component like in below in other cases */}
            <Route path = "/streams/show" exact component = {StreamShow}/>
            <Route path = "/streams/edit" exact component = {StreamEdit}/>
            <Route path = "/streams/delete" exact component = {StreamDelete}/>
        </div>
        </BrowserRouter>
        </div>
    )
}
export default App;