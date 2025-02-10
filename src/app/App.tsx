"use client"

import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { supabase } from '../lib/supabase'; // Import your Supabase client




const App = () => {
  const { user, isSignedIn } = useUser();   
  const [onboardingCompleted, setOnboardingCompleted] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const { data, error } = await supabase
          .from('users')
          .select('onboarding_completed')
          .eq('uid', user.id) // Use Clerk UID
          .single();

        if (data) {
          setOnboardingCompleted(data.onboarding_completed);
        }
      }
    };

    fetchUserData();
  }, [user]);

  const handleOnboardingComplete = async (companySize: string) => {
    if (user) {
      // Insert or update user data in Supabase
      const { error } = await supabase
        .from('users')
        .upsert({
          uid: user.id, // Clerk UID
          company_size: companySize,
          onboarding_completed: true,
        });

      if (error) {
        console.error('Error saving onboarding data:', error);
      } else {
        setOnboardingCompleted(true);
      }
    }
  };

  
};

export default App; 