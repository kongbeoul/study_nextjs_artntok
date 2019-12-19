import { memo } from 'react';
import styled from 'styled-components';

const ArtistInfo = styled.div`
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;

  & .Label {
    width: 45px;
    height: 25px;
    display: block;
    border: 1px solid #4f9b0d;
    font-size: 12px;
    color: #4f9b0d;
    text-align: center;
    line-height: 25px;
  }

  & .NameWrapper {
    margin-top: 12px;
    font-size: 0;

    & > [class*="Name"] {
      display: inline-block;
      vertical-align: bottom;
    }

    & .Name {
      font-size: 25px;
      font-weight: 700;
      color: #111;
    }

    & .engName {
      margin-left: 7px;
      font-size: 15px;
      font-weight: 700;
      color: #333;
    }
  }

  & .InfoList {
    margin-top: 30px;
    font-size: 0;

    & .Info {
      line-height: 2.3;

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

      & > .URL {
        font-family: 'Roboto';
      }
    }
  }
`;

export default memo(({ category, name, engName, birth, url, display}) => {
  return (
    <ArtistInfo>
      <span className="Label">{ category }</span>
      <div className="NameWrapper">
        <span className="Name">{ name }</span>
        <span className="engName">{ engName }</span>
      </div>
      <ul className="InfoList">
        <li className="Info">
          <span>출생</span>
          <p>{ birth }년</p>
        </li>
        <li className="Info">
          <span>링크</span>
          <p className="URL"><a href={`http://${url}`} target="_blank">{url}</a></p>
        </li>
        <li className="Info">
          <span>전시</span>
          <p>
            {
              !display && '진행중인 전시가 없습니다.' 
            }
          </p>
        </li>
      </ul>
    </ArtistInfo>
  )
})