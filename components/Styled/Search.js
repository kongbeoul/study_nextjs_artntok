import styled from 'styled-components';
import classNames from 'classnames';
import Icon from './Icon';

const Search = styled(Icon.withComponent("button"))`
  background-image: url(/images/common/ico_finder.png);

  &.active {
    background-image: url(/images/common/ico_finder_bk@3x.png);
  }
`;

export default ({ active }) => {
  return <Search className={classNames('Search', { active })} />
}