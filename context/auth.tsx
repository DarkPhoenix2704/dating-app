import { useSegments, useRouter } from 'expo-router';
import { useEffect, useState, useContext, createContext } from 'react';
import { supabase } from '../lib/supabase';
import { Session } from '@supabase/supabase-js';

const AuthContext = createContext(null);

export function useAuth() {
    return useContext(AuthContext);
}

export function Provider(props) {
    const [user, setUser] = useState<Session | null>(null);

    const router = useRouter();
    const segments = useSegments();

    useEffect(() => {
        const inAuthGroup = segments[0] === 'auth';

        if (!user && !inAuthGroup) {
            router.replace('/auth');
        } else if (user && inAuthGroup) {
            router.replace('/');
        }

        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session);
        });

        supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session);
        });
    }, [user, segments]);

    return (
        <AuthContext.Provider
            value={{
                setUser,
                user,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}
