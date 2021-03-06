import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from  'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import SvgIcon from 'material-ui/SvgIcon';

import AddIcon from 'material-ui/svg-icons/content/add-circle';
import { amber800 } from 'material-ui/styles/colors';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';

import './_contact-view.scss';

export default class ContactView extends Component {
  render() {
    // console.log('props',this.props)
    // console.log('contact',contact)
    return (
      <div>
        <div className='contact-view'>
          <Subheader style={{ padding: 0 }} >Contact Info</Subheader>
          <section className='contact-info'>
            <h3>Contact Name</h3>
            <IconButton
              style={{ display: 'inline-block' }}
              iconStyle={{ height: 15, width: 15 }}
            >
              <EditIcon />
            </IconButton>
            <Divider />
            <p><span>Name:</span> Contact Name</p>
            <p><span>Email:</span> Contact Email</p>
            <p><span>Phone:</span> Contact Phone</p>
            
            
          </section>
        </div>
      </div>
    );
  }
}