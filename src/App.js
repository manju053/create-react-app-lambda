import React, {Component} from 'react';
import styles from './App.module.css';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import { fetchData } from './api';
import logo from './covid19.png'

class App extends Component {

  state = {
    data: {},
    country: ''
  }

  handleCountryChange = async (country) => {
    // fetch the data
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country: country})

  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data: fetchedData})
  }
  render() {
    const {data, country} = this.state;
    return(
      <div className={styles.container}>
      <img src={logo} className={styles.image}/>
     <Cards data={data}/>
     <CountryPicker handleCountryChange={this.handleCountryChange} />
     <Chart country={country} data={data}/>
   </div>
    )
  }
}

export default App;
