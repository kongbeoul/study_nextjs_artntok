import { useState, useCallback, memo } from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import { Tabs, TabButtons, Tab, TabPanel } from '../Tab';

const anchors = ['전시개요', '장소', '댓글 TOK'];

export default memo(({ selectedIndex, commentCount }) => {
  const [index, setIndex] = useState(selectedIndex);
  const handleSelect = useCallback(i => {
    setIndex(i);
  }, [])

  
  if(index === 0) {

   
  } else if(index === 1) {
    
  } else {
   
  }

  return (
    <Tabs padding="72px 0 50px 30px">
      <TabButtons position="position:sticky;top:45px;left:0;z-index:1;">
        {
          anchors.map((v, i) => {
            return (
              <Tab 
                key={i}
                className={cx({ active: i === index })}
                onClick={() => {
                  handleSelect(i)
                }}
              >
                { v }
                {
                  i === anchors.length - 1 && <span className="count"> ({ commentCount })</span>  
                }
              </Tab>
            )
          })
        }
      </TabButtons>
      <TabPanel>
       
      </TabPanel>
    </Tabs>
  )
});