import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CountryData.css'

function CountryCard({country}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='cardImage' src= {country.flags.png} />
      <Card.Body>
        <h5>{country.name.common}</h5>
        <h6>Capital: {country.capital} </h6>
        <h6>Languages: {country.languages ? Object.values(country.languages).join(", ") : "N/A"}</h6>
        <Card.Text>
        {/* <strong>Capital: {country.capital}</strong> */}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CountryCard;