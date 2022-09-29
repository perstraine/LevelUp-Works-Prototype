import { useEffect, useState } from "react";
import axios from 'axios'
import LogIt from '../shared/LogIt'

const useAxiosFetch = (dataUrl) => {
  LogIt("useAxios hook mounted ->", dataUrl);
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);

  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  const handleSearch = (event) => {
    LogIt("debug", "Handle Filter Search");
  };

  console.log("break here");

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();
    console.log("Break here");
    const fetchData = async (props) => {
      setIsLoading(true);
      const { url, id } = props;
        try {
          //  axios.post(url, {
           
          const response = await axios.post( url, {
              id,
              cancelToken: source.token,
        });
        if (isMounted) {
          setAllData(response.data);
          setFilteredData(response.data);
          LogIt("useAxios hook response ->", response.data);
          setFetchError(null);
        }
      } catch (err) {
        if (isMounted) {
          LogIt("useAxios hook response ->", err.message);
          setFetchError(err.message);
          setAllData([]);
          setFilteredData([]);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(dataUrl);

    const cleanUp = () => {
      LogIt("useAxios hook cleanup");
      isMounted = false;
      source.cancel();
    };

    return cleanUp;
  }, []);

  //bug looping when changed top obj for body params.  [dataUrl])... need to fix

  return { allData, filteredData, fetchError, isLoading };
}

export default useAxiosFetch;