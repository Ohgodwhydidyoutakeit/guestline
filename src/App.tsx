import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Filters } from './components/filters/filters';
import { Hotel } from './components/hotels/hotel';
import { RootState } from './redux/store';

function App() {

  const URL = 'https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG'
  // I won't set default types for our state also wont set api response types
  const [apiCall, setApiCall] = useState({
    loading: true,
    data: [],
  })

  const filters = useSelector((state: RootState) => state.filters)

  useEffect(() => {
    axios.get(URL).then((response) => {
      setApiCall({ loading: false, data: response.data })
    })

  }, [])

  // https://rl-uk2.azureedge.net/picturemanager/images/OBMNG4/hotel3.jpg -- background image from your site https://obmng.dbm.guestline.net/
  return (



    <div className="App relative ">


      <>
        <div className='bg-cover image h-80'>
          {/* <img className='bg-cover  object-none  ' src="" alt="main-logo" /> */}

        </div>
        <Filters />


        {/* Could have used a singe hotel type/interface */}
        {!apiCall.loading && apiCall.data.filter((element: any) => element.starRating >= filters.stars).map((element: any, index: number) => {
          return <Hotel hotel={element} key={index} />
        })}

      </>


    </div>

  );
}

export default App;
