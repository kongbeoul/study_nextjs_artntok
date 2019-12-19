import { memo } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Item from './Item';

const Wrapper = styled.div`
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  & .Item {
    flex: none;
    margin-bottom: 40px;
  }
`;

export default memo(({ data, page }) => {
  const link = page.substr(0, page.length - 1);
  return (
    <Wrapper>
      {
        data.map(({ id, ...item}) => {
          return (
            <Link key={id} href={`/view/${link}/[id]`} as={`/view/${link}/001`}>
              <a>
                <Item {...item} />
              </a>
            </Link>
          )
        })
      }
    </Wrapper>
  )
})