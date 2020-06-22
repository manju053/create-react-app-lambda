import React, {useState, useEffect} from 'react';
import {fetchCountries} from '../../api';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';

const CountryPicker = ({handleCountryChange}) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries1 = async () => {
            setCountries(await fetchCountries());
        }

        fetchCountries1();
        console.log("countries", countries);
    }, []);



    return (
        <>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {countries.map((country,i) => <option key={i} value={country.name}>{country.name}</option>)}
                </NativeSelect>
            </FormControl>
            
        </>
    )
}

export default CountryPicker;
