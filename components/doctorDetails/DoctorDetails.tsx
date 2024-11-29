import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDoctorDetailsQuery } from '@/customHooks/cms.query.hooks';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import RevealText from '../revealText/RevealText';
const DoctorDetails: React.FC<{ open: boolean; handleClose: () => void; doctor: any }> = ({ open, handleClose, doctor }) => {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "70%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: {xs:1, md:4},
    overflow:'scroll'
  };
  const {data:singleDoctor, isLoading} = useDoctorDetailsQuery(doctor);
  console.log(singleDoctor?.data);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {isLoading? (
        <Box sx={style}>
             <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
    </Stack>
        </Box>
      ):(
        <Box sx={style}>
        <Stack direction={{xs:'column', md:'row'}}  justifyContent='space-between'>
          <Box>
        <RevealText width='fit-content'><Typography id="modal-modal-title" variant="h6" component="h2"color='success'>
          {singleDoctor?.data.name}
        </Typography></RevealText>
        <RevealText width='fit-content'><Typography variant="h6" sx={{ mt: {lg:2,xs:'3px'}  }} color='primary'>
          {singleDoctor?.data.department_id.departmentName}
        </Typography></RevealText>
        <RevealText width='fit-content'><Typography variant="body1" sx={{ mt: {lg:2,xs:'3px'} }}>
          Aperture time: {singleDoctor?.data.aperture_time}
        </Typography></RevealText>
        <RevealText width='fit-content'><Typography variant="body1" sx={{ mt: {lg:2,xs:'3px'}  }}>
          Departure time: {singleDoctor?.data.departure_time}
        </Typography></RevealText>
        </Box>
        <RevealText width='fit-content'><Image src={`https://doctor-app-bp0m.onrender.com/${singleDoctor?.data.image}`} height='250' width='250'  alt={`doctorImage${singleDoctor?.data.name}`} /></RevealText>
        </Stack>
        
        <RevealText width='fit-content'><Typography variant="body2" sx={{ mt: {lg:2,xs:'3px'}  }}>
          Description: <br/>{singleDoctor?.data.description}
        </Typography></RevealText>
        <Button onClick={handleClose} sx={{ mt: 2 }}>Close</Button>
      </Box>)}
    </Modal>
  );
};

export default DoctorDetails;
