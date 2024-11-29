import { useGetAllDeptsQuery } from "@/customHooks/cms.query.hooks";
import {
  Box,
  Grid2,
  CardActions,
  Card,
  CardContent,
  Typography,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Skeleton
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from "react";
import DepartmentDoctors from "../departmentDoctors/DepartmentDoctors";
import RevealText from "../revealText/RevealText";

const Departments = () => {
  const [selectedDept, setSelectedDept]   =  useState<any>();
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = (dept: any) => {
    setSelectedDept(dept);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  const { data: depts, isLoading } = useGetAllDeptsQuery();
  // console.log(depts);

  return (
    <Box p={{ xs: 0, md: 2 }} sx={{borderRadius:'13px', mx:{xs:0, md:2}, backgroundColor:'#C5E1A5', mt:2}}>
        <RevealText width="fit-content"><Typography variant="h4" color="success" m={2}>Departments</Typography></RevealText>
        {isLoading?(
           <Grid2 container width="100%" alignItems="center" justifyContent="center" >
                <Grid2 size={{ xs: 6, md: 4 }} sx={{p:{xs:1, md:2}}}>
                    <Skeleton height='200px' width='100%' />
                </Grid2>
                <Grid2 size={{ xs: 6, md: 4 }} sx={{p:{xs:1, md:2}}}>
                    <Skeleton height='200px' width='100%' />
                </Grid2>
                <Grid2 size={{ xs: 6, md: 4 }} sx={{p:{xs:1, md:2}}}>
                    <Skeleton height='200px' width='100%' />
                </Grid2>
                <Grid2 size={{ xs: 6, md: 4 }} sx={{p:{xs:1, md:2}}}>
                    <Skeleton height='200px' width='100%' />
                </Grid2>
                <Grid2 size={{ xs: 6, md: 4 }} sx={{p:{xs:1, md:2}}}>
                    <Skeleton height='200px' width='100%' />
                </Grid2>
           </Grid2>
    ):(
    <Grid2 container width="100%" alignItems="center" justifyContent="center" >
        {depts?.data.map((item) => {
          return (
            <Grid2 size={{ xs: 6, md: 4 }} sx={{p:{xs:1, md:2}}} key={item._id}>
              <Card variant="outlined" sx={{transition: 'transform 0.3s ease-in-out','&:hover':{transform: 'scale(1.1)'}}}>
                <React.Fragment>
                  <CardContent sx={{display:'flex', alignItems:'flex-start', flexDirection:'column'}}>
                    <RevealText width="fit-content"><Typography variant="h5" component="div" color="success" sx={{fontSize:{xs:'17px',lg:'20px'}}}>{item.departmentName}</Typography></RevealText>
                    <RevealText width="fit-content"><Typography sx={{ color: "text.secondary", mb: {xs:'0px',lg:1.5}, fontSize:{xs:'12px', lg:'15px'} }}>
                      Assigned Doctors: {item.doctor_id.length}
                    </Typography></RevealText>
                    <RevealText width="fit-content"><Accordion sx={{display:{xs:'block', md:'block', border:'1px solid gray'}}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    >
                    Description
                    </AccordionSummary>
                    <AccordionDetails sx={{fontSize:{xs:'12px', lg:'17px'}}}>
                    {item.description}
                    </AccordionDetails>
                </Accordion>
                </RevealText>
                  </CardContent>
                  <CardActions>
                    
                  <RevealText width="fit-content"><Button sx={{fontSize:{xs:'12px', lg:'14px'}, p:{xs:0}}} onClick={()=>{handleOpen({id: item._id, name: item.departmentName})}}>See appointed Doctors</Button></RevealText>
                  </CardActions>
                </React.Fragment>
              </Card>
            </Grid2>
          );
        })}
      </Grid2>)}
      {selectedDept && (
        <DepartmentDoctors
          open={open}
          handleClose={handleClose}
          dept={selectedDept}
        />
      )}
    </Box>
  );
};

export default Departments;
