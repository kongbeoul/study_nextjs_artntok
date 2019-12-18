import { memo } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import cx from 'classnames';
import Button from './LinkedButton';

const Wrapper = styled.div`
  width: 100%;
  display: flex;

  & > * {
    flex: 1;
  }
`

export default memo(({ anchors, selectedIndex }) => {
  return (
    <Wrapper>
      {
        anchors.map(({ href, as: _as, text }, i) => {
          return (
            <Button key={text + i} className={cx({ active: i === selectedIndex })}>
              <Link href={href} as={_as}>
                <a>{ text }</a>
              </Link>
            </Button>
          )
        })
      }
    </Wrapper>
  )
});