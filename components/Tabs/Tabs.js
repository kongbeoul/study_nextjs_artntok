import React from 'react';
import cx from 'classnames';
import styled from 'styled-components';

import Button from './Button';

const Wrapper = styled.div`
  width: 100%;
  position: relative;

  & .btnTabWrap {
    display: flex;

    & > button {
      flex: 1;
    }
  }
`;

export default ({ children, anchors, selectedIndex, onSelect }) => {
  
  return (
    <Wrapper>
      <div className="btnTabWrap">
        {
          anchors.map((v, i) => {
            return (
              <Button 
                key={i}
                type="button" 
                className={ cx({ active: i === selectedIndex }) }
                onClick={ () => onSelect(i) }
              >
                { v }
              </Button>)
          })
        }
      </div>
      <div>
        { children }
      </div>
    </Wrapper>
  )
}