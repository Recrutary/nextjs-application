import ProtectedRoute from '../components/protected.route';
import { useAuth } from '../context/auth.context';

const Dashboard = () => {
  const { user, signOut } = useAuth();

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl">Welcome, {user?.displayName}</h1>
        <button
          onClick={signOut}
          className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign Out
        </button>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
