import {List, Element, Date, City, TitleDate, TitleCity} from "../KyivSchedule/KyivSchedule.style";

export default function LvivSchedule ({data}) {
    return (
        <List>
            <Element>
                <TitleDate>Дата</TitleDate>
                <TitleCity>До Києва</TitleCity>
                <TitleCity>До Кракова</TitleCity>
                <TitleCity>До Ужгорода</TitleCity>
            </Element>
            {data && data.map(({departure_date, to_kyiv, to_krakow, to_uzhgorod}) => 
                <Element key={departure_date}>
                    <Date>{departure_date}</Date>
                    <City>{to_kyiv}</City>
                    <City>{to_krakow}</City>
                    <City>{to_uzhgorod}</City>
                </Element>    
            )}
        </List>
    );
};