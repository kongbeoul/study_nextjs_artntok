import styled from 'styled-components';
import classNames from 'classnames';
import Icon from './Icon';

const Menu = styled(Icon.withComponent("button"))`
  background-image: url(/images/common/btn_menu.png);

  &.active {
    background-image: url(/images/common/btn_menu_bk@3x.png);
  }
`;

export default ({ active, onVisible }) => {
  return (
    <Menu 
      className={classNames('Menu', { active })}
      onClick={onVisible}
    />
  )
};