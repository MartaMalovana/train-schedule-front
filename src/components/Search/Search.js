import { useState } from "react";
import Select from 'react-select';
import axios from "axios";
import {Form, Label, Input, Button, Title, City} from "./Search.styled";
import CitiesList from "../CitiesList/CitiesList";

const fetch = axios.create({
    baseURL: 'https://localhost:3000'
});

const schedule = async function fetchAPI () {
    const response = await fetch.get('/lviv');
    return response ? response.data : console.log('Fetch error');
};

export default function Search () {
    const [fromStation, setFromStation] = useState(null);

    const cities = [
        {value: "lviv", label: "Lviv"},
        {value: "kyiv", label: "Kyiv"},
        {value: "krakow", label: "Krakow"}
    ];

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
        console.log(e.value);
        setFromStation(e.value);
    };

    const getSchedule = (e) => {
        e.preventDefault();
        console.log(fromStation);
        schedule();
    };

    return (
        <>
        <Title>Розклад руху потягів</Title>
        <Form name="form" type="submit" onSubmit={getSchedule}>
            <Label>від станції</Label>
            <Select name="cityFrom" styles={customStyles} options={cities} defaultValue={cities[0]} onChange={e=>getOption(e)}/>
            <Label>до станції </Label>
            <Select name="city" styles={customStyles} options={cities} defaultValue={cities[0]}/>
            <Button type="submit">Знайти</Button>
        </Form>
        </>
    );
};