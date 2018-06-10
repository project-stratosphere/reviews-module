import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 12px;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 300px;
  flex: 1;
  width: 100%;
  margin: 0px 25px 0px 0px;
`;

export const DescriptorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 6px 0px 6px 0px;
`;

export const DescriptorText = styled.span`
  font-weight: normal;
  color: #484848;
  font-family: Circular,BlinkMacSystemFont,Helvetica Neue,sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
`;
