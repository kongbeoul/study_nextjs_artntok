import styled from 'styled-components';
import classNames from 'classnames';
import Icon from './Icon';

const Location = styled(Icon.withComponent("button"))`
  background-image: url(/images/common/ico_location.png);

  &.active {
    background-image: url(/images/common/ico_location_bk@3x.png);
  }
`;

export default ({ active }) => {
  return <Location className={classNames('Location', { active })}/>
}