import { useState, useEffect } from 'react'
import { Pagination } from '../src/components/Pagination'
import WorldLogo from '../src/assets/planet-earth.png'

const CountriesList = ({countries, searchWord, loading}) => {
  return (
    <div className='countries-container'>
      {!searchWord && <div className='icon-container'>
        <img src={WorldLogo} width='160' height='160' alt="" />
        <div className='text-header'>Country Search</div>
      </div>}
      <div className='display-list-container'>
        {searchWord && <div className='search-word'>Search: <b>"{searchWord}"</b></div>}

        {countries.length === 0 && searchWord? <div className='no-results'>There are no countries for the search.</div> : null}
        <div className='country-list-container'>
          {countries.map(countrie => 
            <div className='countries-list'>
              <div>
                <img src={`https://mock-2-d1101c0b6853.herokuapp.com/${countrie.flag_1x1}`} width='50' alt="" />
              </div>
              <div className='names'>
                <div>{countrie.name}</div>
                <div className='capital-name'>{countrie.capital}</div>
              </div>
            </div>)
          }
        </div>
      </div>
      {loading &&
        <div className='loadingLayer'>
          <span className='loader'>.</span>
        </div>
      }
   </div>
  )
}

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [pageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [searchWord, setSearchWord] = useState(undefined)
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    if(query !== ''){
      setLoading(true)
      try {
        const data = await fetch(`https://mock-2-d1101c0b6853.herokuapp.com/countries?query=${query}&page=${currentPage}&page_size=${pageSize}`)
          .then(response => {
            setLoading(false)
            return response.json()
          })
        setTotal(data.total)
        setCountries(data.results);
        setSearchWord(query)
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    }
  };

  useEffect(()=>{
    fetchData()
  }, [currentPage])

  return (
    <div className='main'>
      <div className='flex'>
        <input 
          type="text" 
          placeholder='Search by country name' 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={() => fetchData()}
        >
          Search
        </button>
      </div>

      <CountriesList countries={countries} searchWord={searchWord} loading={loading}/>

      <Pagination 
        currentPage={currentPage}
        totalCount={total}
        pageSize={pageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
    
  )
}

export default App
