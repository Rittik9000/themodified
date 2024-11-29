
import React from 'react';
import { Box, Button, Paper, TextField, Typography, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useSignInMutation } from '@/customHooks/auth.query.hooks';
import Link from 'next/link';
import RevealDiv from '@/components/revealDiv/RevealDiv';


interface FormData {
  email: string;
  password: string;
}

const Index: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const { mutate, isPending } = useSignInMutation();

  const onSubmit = (formData: FormData) => {
    const data = new URLSearchParams();
    data.append('email', formData.email);
    data.append('password', formData.password);
    mutate(data.toString());
  };

  return (
    <Box
      sx={{
        p: 2,
        width: '100%',
        background: 'linear-gradient(to bottom, #004D14, #f8f7f2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        
      }}
    >
      <RevealDiv width='fit-content'><Paper
        elevation={6}
        sx={{
          px: 2,
          py: 3,
          width: { xs: '90vw', lg: '50vw' },
          textAlign: 'center',
          
        }}
      >
        <Typography variant="h5" gutterBottom>
          Login Form
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Invalid email format",
              },
            })}
            label="Your Email"
            fullWidth
            margin="normal"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email && errors.email.message}
          />
          <TextField
            {...register("password", {
              required: "Password is required",
            })}
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
            error={!!errors.password}
            helperText={errors.password && errors.password.message}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            type="submit"
            sx={{ marginTop: 2 }}
          >
            {isPending ? 'Loading...' : 'Log In'}
          </Button>
        </form>
        
        {/* the hr text */}

        <div>
          <span>OR</span>
        </div>
        <Stack spacing={2} direction={"row"} alignItems="center"  justifyContent="center">
            <Typography variant='body1' sx={{color:"gray"}}>New customer?</Typography>
            <Link href="/auth/signup"><Button variant='contained' color='secondary'>Sign up</Button></Link>
        </Stack>
      </Paper>
      </RevealDiv>
    </Box>
  );
};

export default Index;
