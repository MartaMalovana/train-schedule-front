import {List, Element, TitleDate, TitleCity, City, Date} from "./Schedule.styled";

export default function Schedule ({data, station}) {
    return (
        <List>
            <Element>
                <TitleDate>Дата</TitleDate>
                <TitleCity>Час відправлення</TitleCity>
            </Element>
            {data && data.map((el) => 
                <Element key={el.departure_date}>
                    <Date>{el.departure_date}</Date>
                    <City>{el[station]}</City>
                </Element>                          
            )}
        </List>
    );
};