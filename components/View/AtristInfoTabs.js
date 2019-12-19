import { useState, useMemo, useCallback, useContext, memo } from 'react';
import { RepresentContext } from '../../context/represent'
import cx from 'classnames';
import { Tabs, TabButtons, Tab, TabPanel } from '../Tab';
import { NoItem } from '../Styled';
import ArtistHistory from './ArtistHistory';
import ArtistRepresent from './ArtistRepresent';

const anchors = ['전시정보', '작가약력', '대표작품'];

export default memo(({ selectedIndex, data }) => {
  const [index, setIndex] = useState(selectedIndex);
  const handleSelect = useCallback(i => {
    setIndex(i);
  }, [])

  const [displayInfo, history] = useMemo(() => data, [data]);

  const { represent } = useContext(RepresentContext);
  
  let Pannel;
  
  if(index === 0) {
    Pannel = displayInfo ? '' : <NoItem text={anchors[index].substr(0, 2)}/>
  } else if(index === 1) {
    if(history) {
      const { edu, description } = history;
      Pannel = <ArtistHistory edu={edu} description={description} />
    } else {
      Pannel = <NoItem text={anchors[index].substr(0, 2)}/>
    }
  } else {
    if(represent) {
      Pannel = <ArtistRepresent represent={represent} />
    } else {
      Pannel = <NoItem text={anchors[index].substr(0, 2)}/>
    }
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
              </Tab>
            )
          })
        }
      </TabButtons>
      <TabPanel>
        { Pannel }
      </TabPanel>
    </Tabs>
  )
});