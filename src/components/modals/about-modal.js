import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

export default class AboutModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Dialog
        style={{ paddingBottom: 0 }}
        title='About Us'
        actions={this.props.actions}
        modal={false}
        onRequestClose={this.props.modalClose}
        open={this.props.open}
        autoScrollBodyContent={true}>
        <Card>
          <CardHeader
            style={{ paddingBottom: 0 }}
            title="Melanie Cohen"
            subtitle="Full-Stack JavaScript Developer"
            avatar="https://avatars3.githubusercontent.com/u/26122258?s=460&v=4"
          />
          <CardText>
          A Program Manager-turned-Dev who is all about innovation and improving the user experience through better code. Also cats.
          </CardText>
        </Card>
        <Card>
          <CardHeader
            style={{ paddingBottom: 0 }}
            title="Alex Bowers"
            subtitle="Full-Stack JavaScript Developer"
            avatar="https://media.licdn.com/dms/image/C5603AQE-7Tahqu82Vw/profile-displayphoto-shrink_200_200/0?e=1529272800&v=beta&t=uhO67Y_UhuPTyrH26orq3OAtrBe_CqpiBiH2_9a_EV4"
          />
          <CardText>
            Ex-Army linguist who believes coding can make the world a better place.  Technology is my jam.
          </CardText>
        </Card>
        <Card>
          <CardHeader
            style={{ paddingBottom: 0 }}
            title="Christian Miller"
            subtitle="Full-Stack JavaScript Developer"
            avatar="https://pbs.twimg.com/profile_images/732148999344394242/VPrUec47_400x400.jpg"
          />
          <CardText>
          With a background in customer service, Christian hopes to move into a full-stack role with a focus on back-end development. Also dogs are better than cats.
          </CardText>
        </Card>
        <Card>
          <CardHeader
            style={{ paddingBottom: 0 }}
            title="Ahmed Ali"
            subtitle="Full-Stack JavaScript Developer"
            avatar="https://media.licdn.com/dms/image/C5603AQGo_j2TEvk58g/profile-displayphoto-shrink_800_800/0?e=1529272800&v=beta&t=Hl89OLSU_VLBTxI4um_rPR28Sf_ImDIWmV-LSK8GfkE"
          />
          <CardText>
            Unfortunately, Ahmed broke his foot partway through our front-end build and couldn't join us, but was part of the team for our back-end build. 
          </CardText>
        </Card>
        <FlatButton
          label='Close'
          primary={true}
          onClick={this.props.modalClose}
        />
      </Dialog>
    );
  }
}