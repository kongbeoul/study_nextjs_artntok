import styled from 'styled-components';

const Label = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: #f93974;
  line-height: 1.5;
`;

const Title = styled.h3`
  padding-right: 100px;
  box-sizing: border-box;
  font-size: 25px;
  font-weight: 700;
  color: #111;
  line-height: 1.6;
  word-break: keep-all;
`;

const Section = styled.section`
  padding: 59px 0 78px 40px;
  box-sizing: border-box;
  background-color: #fff;

  & .label + .tit {
    margin-top: 8px; 
  }

  & .tit + .section-slider {
    margin-top: 39px;
  }

  & .section-slider + .section-slider {
    margin-top: 50px;
    padding-top: 50px;
    border-top: 1px solid #ededed;
    box-sizing: border-box;
  }

  & .section-slider {
    & .item {
      margin-right: 8px;
    }
  }

  & .section-slider.superPink {
    & .item {
      margin-right: 16px;
    }
  }

`;

export default ({ label, title, children }) => {
  return (
    <Section className="section">
      { label && <Label className="label">{ label }</Label>}
      <Title className="tit">{ title }</Title>
      <>
        {children}
      </>
    </Section>
  )
}