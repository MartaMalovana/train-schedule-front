import {List, Element, Date, City, TitleDate, TitleCity} from "../KyivSchedule/KyivSchedule.style";

export default function LvivSchedule ({data}) {
    return (
        <List>
            <Element>
                <TitleDate>Дата</TitleDate>
                <TitleCity>До Львова</TitleCity>
            </Element>

            {data && data.map(({departure_date, to_lviv}) => 
                <Element key={departure_date}>
                    <Date>{departure_date}</Date>
                    <City>{to_lviv}</City>
                </Element>    
            )}
        </List>
    );
};