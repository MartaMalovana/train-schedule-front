import styled from "@emotion/styled";

export  const Title = styled.h2`
    text-align: center;
`;

export  const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;     
    width: auto;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 30px;
    @media screen and (min-width: 390px) {
          flex-direction: row;
          margin-top: 0;
    };
`;

export  const Label = styled.p`
    font-size: 20px;
    margin-left: 10px;
    margin-right: 10px;
`;

