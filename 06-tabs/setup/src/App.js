import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [jobDatas, setJobDatas] = useState([]);
  const [value, setValue] = useState(0);
  
  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobDatas(newJobs)
    setLoading(false)
  }
  
  useEffect(() => {
    fetchJobs()
  }, [])
  
  //when fetching API, I need to set up  a loading function to deal with before the data is loaded.
  if (loading) {
    return (
      <section className='section loading'>
        <h1>Loading . . . </h1>
      </section>
    )
  }

  const { title, company, dates, duties } = jobDatas[value]

  return (
    <section className='section'>
      <div className='title'>
        <h2>Experience</h2>
        <div className='underline'></div>
      </div>

      <div className='jobs-center'>
        <div className='btn-container'>
          {jobDatas.map((jobData, index) => {
            return (
              <button key={jobData.id}
                      onClick={() => setValue(index)}
                      className={`job-btn ${ index === value && 'active-btn'}`}
                      >
                {jobData.company}
              </button>
            )
          })}
       </div>

      <article className='job-info'>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className='job-date'>{dates}</p>
            {duties.map( (duty, index) => {
              return(
              <div key={index} className='job-desc'> 
                <FaAngleDoubleRight className='job-icon'/>
                <p>{duty}</p>
              </div> )
            })}
      </article>
      </div>

    </section>
    )
}

export default App
