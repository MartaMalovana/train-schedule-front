import styled from "@emotion/styled";

export const List = styled.ul`
    margin: 0; 
    padding: 10px 10px 10px 10px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: #88CCFB;
`;

export const Element = styled.li`
    display: flex;
    margin: 0 0 5px 0;
`;

export const Date = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc((100% - 40px)/4);
    border-radius: 10px;
    border: 1px solid white;
    margin: 0 5px 0 0;
    background-color: white;
`;

export const City = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    width: calc((100% - 40px)/4);    
    border-radius: 10px;
    border: 1px solid white;
    margin: 0 0 0 5px;
    padding: 2px 3px;
    background-color: white;
`;

export const TitleDate = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc((100% - 40px)/4);
    margin: 0 5px 0 0;
`;

export const TitleCity = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    width: calc((100% - 40px)/4);
    margin: 0 0 0 5px;
    padding: 2px 3px;
`;