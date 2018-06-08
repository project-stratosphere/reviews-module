import styled from 'styled-components';
import StarRatings from 'react-star-ratings';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex: 1;
`;

export const DescriptorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 6px 15px;
  align-items: flex-end;
  flex-wrap: nowrap;
`;

export const StarFormat = styled.span`

`;

export const DescriptorText = styled.span`
  font-weight: normal;
  color: #484848;
  font-family: Circular,BlinkMacSystemFont,Helvetica Neue,sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  padding-bottom: 2px;
`;