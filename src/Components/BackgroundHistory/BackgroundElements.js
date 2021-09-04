import styled from "styled-components";

export const BackgroundCointainer = styled.div`
  min-height: 88vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  border-radius: 8px 24px;

  background: ${({ lightbg }) =>
    lightbg
      ? `linear-gradient(50deg,
    rgba(230, 214, 156, 0.2) 20%,
    rgba(255, 255, 255, 1) 100%)`
      : `linear-gradient(50deg,
    rgba(87, 87, 86, 0.2) 20%,
    rgba(0, 0, 0, 1) 100%)`};

  @media screen and (max-width: 480px) {
    padding: 30px;
  }
`;

// background: rgba(237, 251, 252, 0.2);
// background: linear-gradient(
//   50deg,
//   rgba(237, 251, 252, 0.2) 20%,
//   rgba(252, 255, 255, 1) 100%
// );

export const BackWrapper = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin: 0 20px;
  }
`;

export const BackCardR = styled.div`
  width: 50%;
  min-height: 400px;
  background-color: ${({ lightbg }) => (lightbg ? "#ccc599" : "#000")};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  border-radius: 8px 32px;
  color: white;
  margin-left: -150px;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    width: 90%;
    margin: 0;
    margin-top: -100px;
  }
`;
export const BackCardL = styled.div`
  width: 90%;
  height: 600px;
  background: url(${(props) => props.img}) no-repeat center / cover;
  background-repeat: no-repeat;
  object-fit: cover;
  border-radius: 8px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 400px;
  }
`;

export const BackRH = styled.h1`
  font-size: 40px;
  font-weight: lighter;
`;

export const BackRP = styled.p`
  margin: 20px 0;
  font-weight: 500;
  line-height: 25px;
`;

export const BackRA = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  background-color: white;
  color: black;
  padding: 20px 30px;
  display: inline-block;
  letter-spacing: 2px;
`;
