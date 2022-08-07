import { useState } from "react";
import Select from 'react-select';
import axios from "axios";
import {Form, Label, Title} from "./Search.styled";
import Schedule from "../Schedule/Schedule";
import citiesFrom from "./cities.json";

const fetch = axios.create({
    baseURL: 'http://localhost:3001'
});

export default function Search () {
    const [data, setData] = useState(null);
    const [arrStations, setArrStations] = useState(null);
    const [choosenStation, setChoosenStation] = useState(null);

    const getArrivalStations = function (data) {
        const arrivalStations = Object.keys(data[0]).slice(1).map(el => {
            let label = null;
            switch(el) {
                case "to_lviv": 
                    label = "Львів";
                    break;
                case "to_kharkiv": 
                    label = "Харків";
                    break;
                case "to_odesa": 
                    label = "Одеса";
                    break;
                case "to_krakow": 
                    label = "Краків";
                    break;
                case "to_uzhgorod": 
                    label = "Ужгород";
                    break;
                case "to_kyiv":
                    label = "Київ";
                    break;
            };
            return {value: el, label: label};
        });
        setArrStations(arrivalStations);
        return arrivalStations;
    };

    const schedule = async function fetchAPI (station) {
        const response = await fetch.get(`/${station}`);
        if(response) {
            setData(response.data);
            getArrivalStations(response.data);
        };
        return response ? response : console.log('Fetch error');
    };
    
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            width: "200px"
        }),
        control: () => ({
            width: "200px",
            backgroundColor: "white",
            height: "30px",
            borderRadius: "50px",
            border: "1px solid",
        })
    };

    const getOption = async e => {
        await schedule(e.value);
    };

    const getSchedule = async (e) => {
        e.preventDefault();   
    };

    const getStation = e => {
        setChoosenStation(e.value);
    };

    return (
        <>
        <Title>Розклад руху потягів</Title>
        <Form name="form" type="submit" onSubmit={getSchedule}>
            <Label>від станції</Label>
            <Select name="cityFrom" 
                styles={customStyles} 
                options={citiesFrom} 
                defaultValue={citiesFrom[0]} 
                onChange={e=>getOption(e)}
            />
            {arrStations && <Label>до станції </Label>}
            {arrStations && <Select name="city" 
                styles={customStyles} 
                options={arrStations} 
                // defaultValue={arrStations[0]} 
                onChange={e=>getStation(e)}
            />}
        </Form>
        {choosenStation && <Schedule data={data} station={choosenStation}/>}
        </>
    );
};