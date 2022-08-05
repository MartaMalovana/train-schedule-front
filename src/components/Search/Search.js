import { useState } from "react";
import Select from 'react-select';
import axios from "axios";
import {Form, Label, Input, Button, Title, City} from "./Search.styled";
import KyivSchedule from "../KyivSchedule/KyivSchedule";
import LvivSchedule from "../LvivSchedule/LvivSchedule";
import KrakowSchedule from "../KrakowSchedule/KrakowSchedule";

const fetch = axios.create({
    baseURL: 'http://localhost:3001'
});

export default function Search () {
    const [fromStation, setFromStation] = useState("lviv");
    const [lvivStation, setLvivStation] = useState(null);
    const [kyivStation, setKyivStation] = useState(null);
    const [krakowStation, setKrakowStation] = useState(null);

    const citiesFrom = [
        {value: "lviv", label: "Lviv"},
        {value: "kyiv", label: "Kyiv"},
        {value: "krakow", label: "Krakow"}
    ];

    const schedule = async function fetchAPI (station) {
        const response = await fetch.get(`/${station}`);
        if(response) {
            switch (fromStation) {
                case "lviv": 
                    setLvivStation(response.data);
                    break;
                case "kyiv": 
                    setKyivStation(response.data);
                    break;
                case "krakow": 
                    setKrakowStation(response.data);
                    break;
            };
        };
        return response ? response : console.log('Fetch error');
    };
    
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            width: "200px",
        }),
        control: () => ({
            width: "200px",
            backgroundColor: "white",
            height: "30px",
            borderRadius: "50px",
            border: "1px solid",
        })
    };

    const getOption = (e) => {
        setFromStation(e.value);
    };

    const getSchedule = async (e) => {
        e.preventDefault();
        await schedule(fromStation);
    };

    return (
        <>
        <Title>Розклад руху потягів</Title>
        <Form name="form" type="submit" onSubmit={getSchedule}>
            <Label>від станції</Label>
            <Select name="cityFrom" styles={customStyles} options={citiesFrom} defaultValue={citiesFrom[0]} onChange={e=>getOption(e)}/>
            {/* <Label>до станції </Label>
            <Select name="city" styles={customStyles} options={citiesTo} defaultValue={cities[0]}/> */}
            <Button type="submit">Знайти</Button>
        </Form>
        {fromStation === "lviv" && lvivStation && <LvivSchedule data={lvivStation}/>}
        {fromStation === "kyiv" && kyivStation && <KyivSchedule data={kyivStation}/>}
        {fromStation === "krakow" && krakowStation && <KrakowSchedule data={krakowStation}/>}
        </>
    );
};