import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMesseage] = useState('');

  const searchApi = async (searchTerm) => {
    console.log('Hi there');
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose',
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMesseage('Something went wrong');
    }
  };

  // call searchAPI when component
  // is first rendered. BAD CODE !
  // searchApi('pasta');
  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
};
