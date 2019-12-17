import React, { useState, useCallback, memo } from 'react';
import styled from 'styled-components';

const Heart = styled.button`
  display: inline-block;
  font-size: 0;

  &:before {
    content: '';
    width: 20px;
    height: 20px;
    display: inline-block;
    background: url(/images/common/ico_heart.png) 0 0 no-repeat;
    background-size: 100% auto;
    vertical-align: middle;
  }

  & > span {
    display: inline-block;
    margin-left: 5px;
    font-family: 'Roboto';
    font-size: 12px;
    color: #ddd;
    vertical-align: middle;
  }

  &.active:before {
    background: url(/images/common/ico_heart_on.png) 0 0 no-repeat;
    background-size: 100% auto;
  }
`;

export default memo(({ liked, count }) => {
  const [ like, setLike ] = useState(liked);

  const handleChange = useCallback(e => {
    e.preventDefault();
    setLike(!like);
  }, [like])
  
  return (
    <Heart 
      className={ like ? 'active' : '' }
      onClick={handleChange}
    >
      <span>{ count }</span>
    </Heart>
  )
})