// Filters.js
import React from 'react';
import { Typography, Select, MenuItem, InputLabel, FormControl, TextField } from '@mui/material';

const Filters = ({ filters, setFilters }) => {
  const handleFilterChange = (filterName) => (event) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: event.target.value
    }));
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        {/* Experience */}
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="experience-label">Experience</InputLabel>
          <Select
            labelId="experience-label"
            id="experience"
            value={filters.experience}
            onChange={handleFilterChange('experience')}
            label="Experience"
          >
            <MenuItem value="0-1">0-1 years</MenuItem>
            <MenuItem value="1-3">1-3 years</MenuItem>
            <MenuItem value="3+">3+ years</MenuItem>
          </Select>
        </FormControl>

        {/* Location */}
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="location-label">Location</InputLabel>
          <Select
            labelId="location-label"
            id="location"
            value={filters.location}
            onChange={handleFilterChange('location')}
            label="Location"
          >
            <MenuItem value="New York">New York</MenuItem>
            <MenuItem value="San Francisco">San Francisco</MenuItem>
            <MenuItem value="London">London</MenuItem>
          </Select>
        </FormControl>

        {/* Remote/on-site */}
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="remote-label">Remote/on-site</InputLabel>
          <Select
            labelId="remote-label"
            id="remote"
            value={filters.remote}
            onChange={handleFilterChange('remote')}
            label="Remote/on-site"
          >
            <MenuItem value="Remote">Remote</MenuItem>
            <MenuItem value="On-site">On-site</MenuItem>
          </Select>
        </FormControl>

        {/* Tech stack */}
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="tech-stack-label">Tech stack</InputLabel>
          <Select
            labelId="tech-stack-label"
            id="tech-stack"
            value={filters.techStack}
            onChange={handleFilterChange('techStack')}
            label="Tech stack"
          >
            <MenuItem value="React">React</MenuItem>
            <MenuItem value="Angular">Angular</MenuItem>
            <MenuItem value="Vue">Vue</MenuItem>
          </Select>
        </FormControl>

        {/* Role */}
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="role-label">Role</InputLabel>
          <Select
            labelId="role-label"
            id="role"
            value={filters.role}
            onChange={handleFilterChange('role')}
            label="Role"
          >
            <MenuItem value="Frontend Developer">Frontend Developer</MenuItem>
            <MenuItem value="Backend Developer">Backend Developer</MenuItem>
            <MenuItem value="Full Stack Developer">Full Stack Developer</MenuItem>
          </Select>
        </FormControl>

        {/* Minimum base pay salary */}
        <FormControl sx={{ minWidth: 160 }}>
          <InputLabel id="salary-label">Minimum base pay salary</InputLabel>
          <Select
            labelId="salary-label"
            id="salary"
            value={filters.salary}
            onChange={handleFilterChange('salary')}
            label="Minimum base pay salary"
          >
            <MenuItem value="Less than $50,000">Less than $50,000</MenuItem>
            <MenuItem value="$50,000 - $75,000">$50,000 - $75,000</MenuItem>
            <MenuItem value="More than $75,000">More than $75,000</MenuItem>
          </Select>
        </FormControl>

        {/* Search by company name */}
        <TextField
          id="company-name"
          label="Company Name"
          variant="outlined"
          value={filters.companyName}
          onChange={handleFilterChange('companyName')}
          sx={{ minWidth: 220 }}
        />
      </div>
    </div>
  );
};

export default Filters;
