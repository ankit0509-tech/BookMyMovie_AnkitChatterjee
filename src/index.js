import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';
import Controller from './screens/Controller';

import ImageListItem from '@material-ui/core/ImageListItem';
import ImageList from '@material-ui/core/ImageList';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';

ReactDOM.render(<Controller />, document.getElementById('root'));
registerServiceWorker();


