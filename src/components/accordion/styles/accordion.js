import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
`;
export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 45px;
  margin: auto;
  max-width: 815px;

  @media (max-width: 500px) {
    width: 100vw;
  }
`;

export const Item = styled.div`
  color: white;
  margin-bottom: 5px;
  max-width: 700px;
  width: 100%;

  @media (max-width: 1000px) {
    margin-left: auto;
  }
  &:first-of-type {
    margin-top: 3em;
  }
`;
export const Header = styled.div`
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  padding: 0.8em;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  font-weight: normal;
  background: #2b2b2b;
  user-select: none;
  align-items: center;

  @media (max-width: 426px) {
    width: auto;
  }
  &:hover {
    background: #7e7e7e;
  }
  img {
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: white;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 35px;
  }
`;

export const Body = styled.p`
  max-height: 1200px;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  font-size: 26px;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  font-weight: normal;
  line-height: normal;
  background: #727272;
  padding: 0.6em 2.2em 0.8em 1.2em;
  white-space: pre-wrap;
  user-select: none;
  margin: 0.1rem 0;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
