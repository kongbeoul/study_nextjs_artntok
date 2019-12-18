import { useContext } from 'react'; 
import styled from 'styled-components';
import Icon from './Icon';
import { HeaderContext, TOGGLE_NAVIGATION } from '../../context';

const Menu = styled(Icon.withComponent("button"))`
  background-image: ${ props =>  props.main ? 'url(/images/common/btn_menu.png)' : 'url(/images/common/btn_menu_bk@3x.png)'};
`;

export default ({ main }) => {
  const { dispatch } = useContext(HeaderContext);

  return (
    <Menu 
      main={main}
      className='Menu'
      onClick={() => dispatch({ type: TOGGLE_NAVIGATION }) }
    />
  )
};