import React from 'react';
import { Header, Icon, Button, Title, Left, Right, Body} from 'native-base';
import { connect } from 'react-redux'
import Styles from '../../styles';
import {route} from '../../actions/route'

class MainFooter extends React.Component {
  render() {
    return (
      <Header style={Styles.main.header}>
        <Left/>
        <Body style={Styles.main.headerBody}>
          <Title>{this.props.title}</Title>
        </Body>
        <Right>
          <Button vertical>
            <Icon type="FontAwesome5" name="cog" onPress={() => this.props.onRouter('confi')} />
          </Button>
        </Right>
      </Header>
    );
  }
}

const mapStateToProps = (state) => {
  return {  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRouter:(value) => dispatch(route(value)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainFooter)
