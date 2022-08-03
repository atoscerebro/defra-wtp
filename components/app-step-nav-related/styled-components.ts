import { Link } from '../link';
import styled from 'styled-components';
import * as COLOURS from 'govuk-colours';
import {
  SPACING,
  MEDIA_QUERIES,
  FONT_SIZE,
  FONT_WEIGHTS,
  LINE_HEIGHT,
} from '@govuk-react/constants';

export const AppStepNavRelated = styled.div`
  color: ${COLOURS.BLACK};
  border-top: 2px solid ${COLOURS.BLUE};
  margin-bottom ${SPACING.SCALE_6};
`;

export const AppStepNavRelatedHeading = styled.h2`
  margin-top: ${SPACING.SCALE_3};
  margin-bottom: ${SPACING.SCALE_2};
  font-weight: ${FONT_WEIGHTS.bold};
  font-size: ${FONT_SIZE.SIZE_16};
  font-size: 1rem;
  line-height: ${LINE_HEIGHT.SIZE_16};

  ${MEDIA_QUERIES.TABLET} {
    font-size: ${FONT_SIZE.SIZE_19};
    font-size: 1.1875rem;
    line-height: ${LINE_HEIGHT.SIZE_19};
  }
`;

export const AppStepNavRelatedHeadingLink = styled(Link)`
  :hover {
    color: #003078;
    text-decoration-thickness: max(3px, 0.1875rem, 0.12em);
    text-decoration-skip-ink: none;
  }
  text-decoration-thickness: max(1px, 0.0625rem);
  text-underline-offset: 0.1em;
`;

export const AppStepNavRelatedHeadingParagraph = styled.p`
  color: ${COLOURS.BLACK};
  font-weight: ${FONT_WEIGHTS.regular};
  font-size: ${FONT_SIZE.SIZE_16};
  font-size: 1rem;
  line-height: ${LINE_HEIGHT.SIZE_16};
  margin-top: 0;
  margin-bottom: ${SPACING.SCALE_3};

  ${MEDIA_QUERIES.TABLET} {
    font-size: ${FONT_SIZE.SIZE_19};
    font-size: 1.1875rem;
    line-height: ${LINE_HEIGHT.SIZE_19};
    margin-bottom: ${SPACING.SCALE_4};
  }
`;

export const AppStepNavRelatedHeadingPreTitle = styled.span`
  display: block;
  margin-bottom: ${SPACING.SCALE_3};

  ${MEDIA_QUERIES.TABLET} {
    margin-bottom: ${SPACING.SCALE_1};
  }
`;
