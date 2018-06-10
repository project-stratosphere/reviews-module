import styled from 'styled-components';
import {
  BasicWrapperFlexRowSpan,
  BasicTextFormatSpan,
} from './MasterStyles.styles';

export const TotalReviewsWrapper = BasicWrapperFlexRowSpan.extend`
  min-width: 325px;
  align-content: center;
`;

export const TotalReviewsTextWrapper = BasicTextFormatSpan.extend`
  font-weight: bold;
  font-size: 24px;
`;

export const StarsOverallWrapper = styled.span`
  margin: 4px 0px 0px 14px;
`;
