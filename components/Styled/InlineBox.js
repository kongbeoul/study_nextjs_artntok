import styled from 'styled-components';

const InlineBox = styled.div`
  font-size: 0;

  & > * {
    display: inline-block !important;
    vertical-align: middle;
  }

  & > * + * {
    margin-left: ${ props => props.marginLeft }px;
  }
`

export default InlineBox;