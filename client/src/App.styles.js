import styled from 'styled-components';
import { BasicWrapperFlexColumnDiv } from './components/styles/MasterStyles.styles';

export const AppOuterWrapper = BasicWrapperFlexColumnDiv.extend`
  align-items: center;
`;

export const AppInnerWrapper = styled.div`
  max-width: 650px;
`;

