import { useMemo, useCallback, useContext, memo } from 'react';
import { ViewContext, OPEN_THUMBNAIL_SLIDER } from '../../context/view';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;

  &:after {
    content: '';
    width: 74vw;
    height: 98px;
    position: fixed;
    bottom: 47px;
    left: 70px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.78) 50%, #ffffff);
  }
`;

const Item = styled.div`
  width: 132px;
  height: 132px;
  margin-bottom: 10px;

  & > img {
    width: 100%;
  }
`

export default memo(({ represent }) => {
  const { dispatch } = useContext(ViewContext);

  const handleClicked = useCallback(i => { 
    dispatch({
      type: OPEN_THUMBNAIL_SLIDER,
      index: i
    })
  }, []);

  const memoize = useMemo(() => represent, [represent])

  return (
    <Wrapper>
      {
        memoize.map((v, i) => {
          return (
            <Item key={`대표작품 ${i}`} onClick={() => handleClicked(i) }>
              <img src={v} alt={`대표작품 ${i}`} />
            </Item>
          )
        })
      }
    </Wrapper>
  )
});