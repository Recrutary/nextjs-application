import { useAuth } from '../context/auth.context';

const Login = () => {
  const { signInWithLinkedIn } = useAuth();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <button
        onClick={signInWithLinkedIn}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Sign in with LinkedIn
      </button>
    </div>
  );
};

export default Login;
