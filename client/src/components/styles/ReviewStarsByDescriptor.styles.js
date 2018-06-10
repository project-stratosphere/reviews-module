import styled from 'styled-components';
import {
  BasicTextFormatSpan,
  BasicWrapperFlexRowDiv,
  BasicWrapperFlexColumnDiv,
} from './MasterStyles.styles';

export const ReviewStarsDescriptorWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 12px;
`;

export const ReviewStarsDescriptorColumnWrapper = BasicWrapperFlexColumnDiv.extend`
  justify-content: space-between;
  min-width: 300px;
  flex: 1;
  width: 100%;
  margin: 0px 25px 0px 0px;
`;

export const ReviewStarsDescriptorItemWrapper = BasicWrapperFlexRowDiv.extend`
  justify-content: space-between;
  margin: 6px 0px 6px 0px;
`;

export const ReviewStarsDescriptorTextWrapper = BasicTextFormatSpan.extend`
  font-size: 16px;  
`;
