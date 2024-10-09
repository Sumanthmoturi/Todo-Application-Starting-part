
import { useForm } from 'react-hook-form';
import { loginUser } from '../services/auth';

export default function LoginPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    await loginUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('username')} placeholder="Username" />
      <input {...register('password')} placeholder="Password" type="password" />
      <button type="submit">Login</button>
    </form>
  );
}
