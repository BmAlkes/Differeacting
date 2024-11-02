import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import { Card, CardHeader, CardContent, CardFooter } from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';


import { Label } from '../../../components/ui/label';
import { Alert, AlertDescription } from '../../../components/ui/alert';
import { UserLoginForm } from '../../../@types';
import { autheticateUser } from '../../../api/AuthApi';
import { toast } from 'react-toastify';



interface FormErrors {
  email: string;
  password: string;
}


const Login = () => {
  const [email, setEmail] = React.useState<UserLoginForm['email']>('');
  const [password, setPassword] = React.useState<UserLoginForm['password']>('');
  const [errors, setErrors] = React.useState<FormErrors>({ email: '', password: '' });
  
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', password: '' };

    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is not valid';
      isValid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {

      const formData={
        email,password
      }
      mutate(formData);
    }
  };

  const { mutate } = useMutation({
    mutationFn:autheticateUser,
    
    onError: (error) => {
      console.error('Login failed:', error);
    },
    onSuccess: () => {
      toast.success("Login successful")
      navigate('/dashboard');
    },
  });

  return (
    <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/landingpage2/image/upload/v1715794760/Logo_Horizontal_C_2_ducktr.png"
            alt="Logo"
            className=" w-auto mb-11"
          />
        </div>
        
        <Card className="w-full">
          <CardHeader className="space-y-2">
            <h2 className="text-2xl font-bold text-center">Login</h2>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                />
                {errors.email && (
                  <Alert variant="destructive" className="mt-2">
                    <AlertDescription>{errors.email}</AlertDescription>
                  </Alert>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full"
                />
                {errors.password && (
                  <Alert variant="destructive" className="mt-2">
                    <AlertDescription>{errors.password}</AlertDescription>
                  </Alert>
                )}
              </div>
              
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
          </CardContent>
          
          <CardFooter className="flex justify-center">
            <Link 
              to="/auth/forgot-password"
              className="text-sm text-slate-500 hover:text-slate-400"
            >
              Forgot your password?
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;