import { memo } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { InlineBox } from '../Styled';

const Label = styled.span`
    width: 45px;
    height: 25px;
    display: block;
    border: 1px solid ${ props => props.color };
    font-size: 12px;
    color: ${ props => props.color };
    text-align: center;
    line-height: 25px;
`;

const Place = styled.div`

  & strong {
    display: inline-block;
    font-size: 15px;
    font-weight: 700;
    color: #333;
    vertical-align: middle;
  }

  & > p {
    font-size: 15px;
    color: #333;
  }
`;

const Pin = styled.span`
  width: 15px;
  height: 15px;
  display: inline-block;
  margin-left: 4px;
  background: url(/images/common/icon_pin@3x.png) 0 0 no-repeat;
  background-size: 100% auto;
  vertical-align: middle;
`

const ExhibitionInfo = styled.div`
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;

  & .Title {
    margin-top: 12px;
    font-size: 25px;
    font-weight: 700;
    color: #111;
  }

  & .InfoList {
    margin-top: 30px;
    font-size: 0;

    & .Info {
      line-height: 2.3;

      & > * {
        display: inline-block;
      }

      & > span {
        min-width: 75px;
        display: inline-block;
        font-size: 15px;
        color: #999;
        text-align: left;
      }

      & > p {
        display: inline-block;
        font-size: 15px;
        color: #333;
      }

      & > .Period {
        font-family: 'Roboto';
      }
      
    }
  }
`;

export default memo(({ categorys, title, artist, period, place }) => {
  const { name, location } = place;
  return (
    <ExhibitionInfo>
      <InlineBox marginLeft="5">
        {
          categorys.map((v, i) => {
            const { text, color } = v;
            return (
              <Label key={i} color={color} >{ text }</Label>
            )
          })
        }
      </InlineBox>
      <p className="Title">{title}</p>
      <ul className="InfoList">
        <li className="Info">
          <span>작가</span>
          <p>{artist}</p>
        </li>
        <li className="Info">
          <span>전시기간</span>
          <p className="Period">{period}</p>
        </li>
        <li className="Info">
          <span>전시장소</span>
          <Place className="Place">
            <Link href="/">
              <a>
                <div>
                  <strong>{ name }</strong>
                  <Pin />
                </div>  
              </a>
            </Link>
            <p>{ location }</p>
          </Place>
        </li>
      </ul>
    </ExhibitionInfo>
  )
})