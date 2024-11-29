// Index.tsx

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Cookies } from 'react-cookie';
import {
  Box,
  Grid2,
  IconButton,
  Stack,
  Typography,
  List,
  ListItem,
  Drawer,
  TextField,
  Button,
  Skeleton
} from '@mui/material';
import Image from 'next/image';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import RecentBlogsSingle from '@/components/singleblogRecent/RecentBlogsSingle';

import {
  useCreateCommentMutation,
  useGetSingleBlogComments,
  useGetSingleBlogQuery,
} from '@/customHooks/cms.query.hooks';
import SpringModal from '@/components/customAlert/CustomAlert';


const Index: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [comment, setComment] = useState<string>('');
  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => () => setOpen(newOpen);

  const router = useRouter();
  const { blogs } = router.query;
  const blogId = blogs?.[0];

  const cookies = new Cookies();
  const { data: blogComments, isLoading: commentsLoading } = useGetSingleBlogComments(blogId || '');
  const { data: blogData, isLoading: blogLoading } = useGetSingleBlogQuery(blogId || '');
  const { mutate, isPending } = useCreateCommentMutation();

  function formatDateTime(dateTimeString: string): string {
    const date = new Date(dateTimeString); 
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    const dateFormatter = new Intl.DateTimeFormat('en-US', options);
    const timeFormatter = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const formattedDate = dateFormatter.format(date);
    const formattedTime = timeFormatter.format(date);
    const getDaySuffix = (day: number): string => {
      if (day > 3 && day < 21) return 'th'; 
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };
    const day = date.getDate();
    const [weekday, dayOfMonth, month, year] = formattedDate.split(' ');
    return `${formattedTime}  ,${day}${getDaySuffix(day)} ${dayOfMonth} ${year}`;
  }

  const handleChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const onSubmitfc = () => {
    const userId = cookies.get('userId');
    if (!userId) {
      setOpen(false);
      setOpenSnackBar(true); 
    } else {
      const formdata = new URLSearchParams();
      formdata.append('blog_Id', blogId || '');
      formdata.append('user_id', userId);
      formdata.append('comment', comment);
      mutate(formdata.toString());
      setComment('');
    }
  };


  const DrawerContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ flex: 1, overflowY: 'auto', padding: 2 }}>
        <Typography variant="h5" gutterBottom>
          {blogComments?.count === 0 ? 'No Comments Yet' : `${blogComments?.count} Comments`}
        </Typography>
        <List>
          {blogComments?.data.sort((a,b)=>{
            const dateA = new Date(a.createdAt).getTime();
            const dateB = new Date(b.createdAt).getTime();
            return dateB - dateA; 
          }).map((item) => (
            <ListItem
              key={item._id}
              sx={{
                p: 2,
                m: 2,
                borderRadius: '13px',
                background: '#F5EDED',
                width: '90%',
              }}
            >
              <Stack>
                <Stack direction="row">
                  <Typography variant="h6">{item.user_id?.name || 'Unknown User'}</Typography>
                </Stack>
                <Typography variant="body1">{item.comment || 'No Comment'}</Typography>
              </Stack>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ padding: 2 }}>
        <Stack direction="row" spacing={2} alignItems="flex-end">
          <TextField
            label="Add a comment"
            variant="outlined"
            multiline
            fullWidth
            value={comment}
            onChange={handleChangeMessage}
          />
          <Button variant="contained" sx={{ px: 2 }} onClick={onSubmitfc}>
            <SendIcon />
          </Button>
          <Button variant="outlined" onClick={toggleDrawer(false)}>
            Cancel
          </Button>
        </Stack>
      </Box>
    </Box>
  );

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url('/images/blogDetails.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { xs: "400px", lg: "400px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
         <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 255, 0, 0.3)', // Bluish background with transparency
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              justifyContent: 'center',
              textAlign: 'center',
              p: 6,
            }}
          >
            <Stack alignItems='start'>
              <Typography variant="h4" sx={{color:'white'}} gutterBottom>BlogDetails</Typography>
              <Typography variant="h6" sx={{color:'white'}}>Home / Blogs / BlogDetails</Typography>
            </Stack>
          </Box>
      </Box>
      {commentsLoading || blogLoading ?(
        <Grid2 container rowSpacing={2} columnSpacing={2} width="100%" p={2}>
        <Grid2 size={{xs:12, md:6}} sx={{ display: 'flex', flexDirection: 'column', p: 2, background: '#d4d4d4', borderRadius: '13px' }}>
        <Stack spacing={1}>
    {/* For variant="text", adjust the height via font-size */}
    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
    {/* For other variants, adjust the size with `width` and `height` */}
    <Skeleton variant="circular" width={40} height={40} />
    <Skeleton variant="rectangular" width={210} height={60} />
    <Skeleton variant="rounded" width={210} height={60} />
    </Stack>
        </Grid2>
        <Grid2 size={{xs:12, md:6}} >
        <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width="60%" />
            <Skeleton width="60%" />
            <Skeleton width="60%" />
            <Skeleton width="60%" />
          </Box>
        </Grid2>
      </Grid2> 
      ):(
        <Grid2 container rowSpacing={2} columnSpacing={2} width="100%" p={2}>
        <Grid2 size={{xs:12, md:6}} sx={{ display: 'flex', flexDirection: 'column', p: 2, background: '#C7E9C0', borderRadius: '13px' }}>
          <Image
            src={`https://doctor-app-bp0m.onrender.com/${blogData?.data?.image || ''}`}
            alt="Blog Image"
            width={904}
            height={720}
          />
          <Typography gutterBottom variant="h4" color='success'>
            {blogData?.data.title}
          </Typography>
          <Typography gutterBottom variant="body1" color="primary">
            {formatDateTime(blogData?.data.createdAt || '')}
          </Typography>
          <Typography gutterBottom variant="h6">
            {blogData?.data.description}
          </Typography>
          <Stack direction="row" spacing={2}>
            <Typography gutterBottom variant="h6">
              {blogComments?.count === 0 ? 'No Comments Yet' : `${blogComments?.count} Comments`}
            </Typography>
            <IconButton onClick={() => setOpen(true)}>
              <ChatBubbleOutlineIcon />
            </IconButton>
          </Stack>
        </Grid2>
        <Grid2 size={{xs:12, md:6}}>
          <RecentBlogsSingle />
        </Grid2>
      </Grid2>
      )}
      <Drawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{ sx: { height: '50%', maxHeight: '80%', overflow: 'hidden' } }}
      >
        {DrawerContent}
      </Drawer>
      {openSnackBar && (
         <SpringModal isOpen={openSnackBar} setIsOpen={setOpenSnackBar} />
      )}
    </Box>
  );
};

export default Index;
