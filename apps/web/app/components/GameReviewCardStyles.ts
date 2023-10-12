import { css } from '@emotion/native';
import styled from '@emotion/native';


export const container = css`
  padding: 20px;
  background-color: white;
`;

export const row = css`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const UserIcon = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const userName = css`
  margin-left: 10px;
`;

export const GameIcon = styled.Image`
  width: 40px;
  height: 40px;
  margin-left: auto;
`;

export const gameTitle = css`
  margin-left: 10px;
`;

export const reviewTitle = css`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
`

export const reviewText = css`
  margin-bottom: 10px;
`;

export const hashtag = css`
  margin-right: 5px;
  color: blue;
`;

export const relatedGameImage = css`
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
`;

export const buttonRow = css`
  flex-direction: row;
  justify-content: space-between;
`;
