"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { IUser } from '@/modules';
import { useAuth } from '@/app/context/auth.context';
import { useTranslations } from 'next-intl';

const UserForm = () => {
  const { authUser, getToken } = useAuth();
  const [user, setUser] = useState<Partial<IUser>>({
    name: '',
    email: '',
  });
  const t = useTranslations('translation');

  useEffect(() => {
    if (authUser) {
      setUser({
        name: authUser.name || '',
        email: authUser.email || '',
      });
    }
  }, [authUser]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = await getToken();
    console.log(token);
    try {
      const response = await axios.post('/api/users', user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(t('user_created_updated'), response.data);
    } catch (error) {
      console.error(t('error'), error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 shadow-md rounded">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          {t('form.name')}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          {t('form.email')}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {t('form.save')}
      </button>
    </form>
  );
};

export default UserForm;
