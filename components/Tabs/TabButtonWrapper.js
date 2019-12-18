import { memo } from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import Button from './Button';

const TabButtonWrapper = styled.div`
  display: flex;

  & > button {
    flex: 1;
  }
}`;

export default memo(({ anchors, selectedIndex, onSelect }) => {
  return (
    <TabButtonWrapper>
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
    </TabButtonWrapper>
  )
})
