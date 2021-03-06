import { memo } from 'react';
import styled from 'styled-components';
import { Art, Heart, InlineBox, Share } from '../Styled';

const ArtistBottom = styled.div`
  width: 100%;
  height: 47px;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 60;
  background-color: #f8f8f8;

  & > * {
    flex: none;

    &:first-child {
      margin-right: auto;
    }

    &:first-child + * {
      margin-left: auto;
    }
  }  
`;


export default memo(({ me, info }) => {
  const { liked } = me;
  const { artCount, likeCount } = info;
  
  return (
    <ArtistBottom>
      <InlineBox marginLeft="20">
        <Art count={artCount} color="#333" />
        <Heart count={likeCount} liked={liked} color="#333" />
      </InlineBox>
      <Share />
    </ArtistBottom>
  )
});