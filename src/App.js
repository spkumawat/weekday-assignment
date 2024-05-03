import React, { useState, useEffect, useRef, useCallback } from 'react';
import JobCard from './JobCard/JobCard';
import Grid from '@mui/material/Grid';
import Filters from './filters/filters';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [filters, setFilters] = useState({
    experience: '',
    location: '',
    remote: '',
    techStack: '',
    role: '',
    salary: '',
    companyName: ''
  });

  const observer = useRef();
const lastJobElementRef = useCallback(node => {
  if (loading) return;
  if (observer.current) observer.current.disconnect();
  observer.current = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !loading) {
      setOffset(prevOffset => prevOffset + 10);  // Load more items
    }
  });
  if (node) observer.current.observe(node);
}, [loading]);

  useEffect(() => {
    fetchJobs();
  }, [offset, filters]);  // Effect runs on offset and filter change

  const fetchJobs = async () => {
    setLoading(true);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const body = JSON.stringify({
      limit: 10,  // Assuming each fetch retrieves 10 items
      offset: offset
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body
    };

    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
      .then(response => response.json())
      .then(result => {
        setJobs(prevJobs => [...prevJobs, ...result.jdList]);  // Append jobs as they are loaded
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to fetch jobs:', error);
        setLoading(false);
      });
};

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setOffset(0);  // Reset offset to load from the beginning with new filters
  };

  const applyFilters = () => {
    return jobs.filter(job => {
      return (filters.experience ? job.experience === filters.experience : true) &&
             (filters.location ? job.location.includes(filters.location) : true) &&
             (filters.remote ? job.remote === filters.remote : true) &&
             (filters.techStack ? job.techStack.includes(filters.techStack) : true) &&
             (filters.role ? job.role === filters.role : true) &&
             (filters.salary ? job.salary >= filters.salary : true) &&
             (filters.companyName ? job.companyName.toLowerCase().includes(filters.companyName.toLowerCase()) : true);
    });
  };
  
  return (
    <>
      <header>
        <Filters filters={filters} setFilters={setFilters} />
      </header>
      <Grid container spacing={2}>
        {applyFilters().map((job, index) => {
          const isLastElement = jobs.length === index + 1;
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={job.jdUid} ref={isLastElement ? lastJobElementRef : null}>
              <JobCard job={job} />
            </Grid>
          );
        })}
        {loading && <p>Loading...</p>}
      </Grid>
    </>
  );
  
};


export default App;
