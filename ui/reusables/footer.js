import React from 'react';
import { Footer, FooterTab,Icon} from 'native-base';
import { connect } from 'react-redux'
import Styles from '../../styles';

class MainFooter extends React.Component {
  state = { value: '' }
  render() {
    return (
      <Footer >
        <FooterTab style={Styles.main.footer} >
         <Button vertical onPress={() => this.props.expense()}>
           <Icon type="FontAwesome5" name="money-check-alt"  />
           <Text>Gastos</Text>
         </Button>
         <Button vertical onPress={() => this.props.home()}>
           <Icon type="FontAwesome5" name="home" />
           <Text>Inicio</Text>
         </Button>
         <Button vertical>
           <Icon type="FontAwesome5" name="money-check" onPress={() => this.props.income()} />
           <Text>Ingresos</Text>
         </Button>
       </FooterTab>
     </Footer>
    );
  }
}


const mapStateToProps = (state) => {
  return {  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    home:() => dispatch(route('dashbord')),
    expense:() => dispatch(route('expenses')),
    income:() => dispatch(route('income')),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainFooter)
