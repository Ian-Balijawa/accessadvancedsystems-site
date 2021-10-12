import React from 'react';
import { render } from 'react-dom';
import App from '../App';
import Modal from 'react-modal';

Modal.setAppElement('#root');

render(<App />, document.getElementById('root'));
