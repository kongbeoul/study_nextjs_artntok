import React, { useState, useCallback, memo } from 'react';
import { withRouter } from 'next/router';
import styled from 'styled-components';
import cx from 'classnames';
import { Tabs, TabButtons, Tab, TabPanel } from '../Tab';
import ExhibitionParagraph from './ExhibitionParagraph';
import { Write } from '../Styled';


const anchors = ['전시개요', '장소', '댓글 TOK'];

const IncludingCountTab = styled(Tab)`
  & > .count {
    font-family: 'Roboto';
    font-size: 12px;
    color: #999;
    vertical-align: middle;
  }
`;

const Paragraph = styled.p`
  font-size: 15px;
  color: #666;
  line-height: 1.86;

  & + .Paragraph {
    margin-top: 30px;
  }
`;

const Row = styled.div`
  width: 100%;
  line-height: 1.86;
  overflow: hidden;
  
  & > span {
    width: 75px;
    display: block;
    font-size: 15px;
    font-weight: 500;
    color: #333;
    text-align: left;
    float: left;
    overflow: hidden;
  }

  & > span + * {
    margin-left: 75px;
    & > p {
      font-size: 15px;
      color: #666;
      word-break: keep-all;
    }
  }
`;

const RoadMap = styled.div`
  margin-bottom: 20px;

  & > img {
    width: 100%;
  }
`;

const Textarea = styled.div`
  position: relative;

  & textarea {
    width: 100%;
    height: 45px;
    display: block;
    padding: 12px 15px;
    box-sizing: border-box;
    border: 1px solid #111;
    font-size: 14px;
    transition: 500ms height ease, 350ms border-width ease-out;

    &:focus {
      height: 140px;
      border-width: 2px;
    }
  }

  & .Write {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
  }
`;

const Insert = styled.button`
  width: 65px;
  height: 45px;
  display: ${ props => props.visible ? 'block' : 'none' };
  margin: 15px 0 0 auto;
  background-color: #111;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  text-align: center;
  line-height: 2;
`


export default withRouter(memo(({ selectedIndex, data, place, commentCount, router }) => {
  const [index, setIndex] = useState(selectedIndex);
  const [value, setValue] = useState('');
  const [visible, setVisible] = useState(false);
  const handleSelect = useCallback(i => {
    setIndex(i);
  }, [])

  const [ generalOutline, locationInfo ] = data;

  let Pannel;
  
  if(index === 0) {
    if(generalOutline) {
      const paragraphs = generalOutline.split("\n").map((v, i) => {
        return ( 
          <Paragraph key={i} className="Paragraph">{ v }</Paragraph>
        )
      });
      Pannel = <ExhibitionParagraph title="전시개요">{ paragraphs }</ExhibitionParagraph>
    }
   
  } else if(index === 1) {
    if(locationInfo) {
      const rows = locationInfo.map(({ tit, desc }, i) => {
        return (
          <Row key={i}>
            <span>{tit}</span>
            <div>
              {
                desc.split("\n").map((v, i) => {
                  return <p key={i}>{ v }</p>
                })
              }
            </div>
          </Row>
        )
      })
      Pannel = ( 
        <ExhibitionParagraph title={ place.name }>
          <React.Fragment>
            <RoadMap>
              <img src="/images/temp/sample-load@3x.png" alt={`${ place.name} 지도`} />
            </RoadMap>
            { rows }
          </React.Fragment>
        </ExhibitionParagraph> 
      )
    }
  } else {
    Pannel = (
      <ExhibitionParagraph title="댓글">
        <form onSubmit={ e => {
          e.preventDefault();
          setValue('');
        }}>
          <Textarea>
            <textarea 
              value={value} 
              onChange={e => setValue(e.target.value)}
              onFocus={() => setVisible(true) }
              placeholder="작품에 관한 의견을 들려주세요 :D"
              placeholdertextcolor="#aaa"
              />
              <Write className="Write" />
          </Textarea>
          <Insert visible={visible}>등록</Insert>
        </form>
      </ExhibitionParagraph>
    )
  }

  return (
    <Tabs padding="72px 0 50px 30px">
      <TabButtons position="position:sticky;top:45px;left:0;z-index:1;">
        {
          anchors.map((v, i) => {
            return (
              <IncludingCountTab 
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
              </IncludingCountTab>
            )
          })
        }
      </TabButtons>
      <TabPanel>
        { Pannel }
      </TabPanel>
    </Tabs>
  )
}));