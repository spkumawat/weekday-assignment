
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Link from '@mui/material/Link';

const JobCard = ({ job }) => {
  const formattedSalary = job.minJdSalary && job.maxJdSalary
    ? `${job.salaryCurrencyCode} ${job.minJdSalary}k - ${job.maxJdSalary}k`
    : 'Salary not disclosed';

  return (
    <Card sx={{ minWidth: 275, marginBottom: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {job.jobRole}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Location: {job.location}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Salary: {formattedSalary}
        </Typography>
        <Typography variant="body2" sx={{
          maxHeight: '10em', // Set max height to limit the text to a few lines
          overflow: 'hidden', // Ensures the overflow text is hidden
          position: 'relative', // Needed for the pseudo-element to position correctly
          marginBottom: '1rem', // Space before the button
          '&:after': { // Pseudo-element for the fade effect
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%', // Full width of the container
            height: '2em', // Height of the fading effect
            background: 'linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))' // Gradient fading upwards
          }
        }}>
          {job.jobDetailsFromCompany}
        </Typography>
      </CardContent>
      <CardActions sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '4px', // Reduced padding
        margin: '0 auto', // Optional: Center the button and reduce external margins
      }}>
        <Button size="small" component={Link} href={job.jdLink} target="_blank">View Job</Button>
        <Button size="small" sx={{ bgcolor: 'green', color: 'white', marginBottom: '8px' }}>
          Easy Apply
        </Button>
        <Button size="small" sx={{ bgcolor: 'purple', color: 'white' }}>
          Unlock Referrals
        </Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;
