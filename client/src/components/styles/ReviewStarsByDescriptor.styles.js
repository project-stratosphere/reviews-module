import styled from 'styled-components';
import StarRatings from 'react-star-ratings';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: nowrap;
`

export const DescriptorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: nowrap;
`

export const DescriptorText = styled.span`
  font-weight: normal;
  color: #484848;
  font-family: Circular,BlinkMacSystemFont,Helvetica Neue,sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
`;