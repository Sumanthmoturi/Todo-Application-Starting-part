
import { useForm } from 'react-hook-form';
import { registerUser } from '../services/auth';

export default function RegisterPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    await registerUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('username')} placeholder="Username" />
      <input {...register('password')} placeholder="Password" type="password" />
      <button type="submit">Register</button>
    </form>
  );
}
