import styled from 'styled-components';
import { BasicTextFormatDiv } from './MasterStyles.styles';

export const ReviewEntryWrapper = styled.div`
  box-sizing: border-box;
  border-bottom: .5px solid #ccc;
  width: 100%;
`;

export const ReviewUserWrapper = BasicTextFormatDiv.extend`
  padding-top:24px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  box-sizing: inherit;
`;

export const ReviewDateWrapper = BasicTextFormatDiv.extend`
  font-size: 14px;
  line-height: 18px;
  box-sizing: inherit;
  padding-top: 2px;
`;

export const ReviewTextWrapper = BasicTextFormatDiv.extend`
  font-size: 16px;
  line-height: 22px;
  box-sizing: inherit;
  padding-top: 22px;
  padding-bottom: 24px;
`;

