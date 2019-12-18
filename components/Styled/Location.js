import styled from 'styled-components';
import Icon from './Icon';

const Location = styled(Icon)`
  background-image: ${ props => props.main ? 'url(/images/common/ico_location.png)' : 'url(/images/common/ico_location_bk@3x.png)' };

`;

export default Location;