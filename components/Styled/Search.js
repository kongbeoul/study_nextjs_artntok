import styled from 'styled-components';
import Icon from './Icon';

const Search = styled(Icon)`
  background-image: ${ props => props.main ? 'url(/images/common/ico_finder.png)' : 'url(/images/common/ico_finder_bk@3x.png)' };

`;

export default Search;