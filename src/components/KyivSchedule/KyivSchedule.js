import {List, Element, Date, City, TitleDate, TitleCity} from "./KyivSchedule.style";

export default function KyivSchedule ({data}) {
    return (
        <List>
            <Element>
                <TitleDate>Дата</TitleDate>
                <TitleCity>До Харкова</TitleCity>
                <TitleCity>До Львова</TitleCity>
                <TitleCity>До Одеси</TitleCity>
            </Element>

            {data && data.map(({departure_date, to_kharkiv, to_lviv, to_odesa}) => 
                <Element key={departure_date}>
                    <Date>{departure_date}</Date>
                    <City>{to_kharkiv}</City>
                    <City>{to_lviv}</City>
                    <City>{to_odesa}</City>
                </Element>
                
            )}
        </List>
    );
};