import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { API_MEMBER } from '@/lib/constants';
import axios from 'axios';
import { initModal, nextModal } from '@/modules/modal';
import { setAccessToken, setIsLogin } from '@/modules/auth';

export default function useLoginModal() {
    const onSuccess = async (response: any) => {
        console.log(response);
        const loginUrl = `${API_MEMBER}/auth/v1/login/google`;
        const data = { code: response.code }
        try {
            const tokens = (await axios.post(loginUrl, data));
            const authorizationHeaderValue = tokens.headers['authorization'];
            console.log(tokens);
            console.log(tokens.headers);
            setAccessToken(authorizationHeaderValue);
            setIsLogin(true);
            initModal('login');
        } catch (e) {
            console.log(e);
            try {
                if ((e as any).response.data.error_code === "NEW_USER") {
                    console.log("new user, show nickname form")
                    setAccessToken((e as any).response.data.token.access_token);
                    nextModal({current: 'login', next: 'join'});
                }
            } catch (e) {
                onError();
            }
        }
    }
    const onError = () => {
        console.log('Login Failed');
    }

    const login = useGoogleLogin({onSuccess, onError});

    const state = {};
    const handler = { login };

    return { ...state, ...handler }
}