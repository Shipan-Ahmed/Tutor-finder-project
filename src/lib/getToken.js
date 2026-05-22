import React from 'react';
import { authClient } from './auth-client';

const getJwt = async () => {
    const token = await authClient.getToken();

    return token.token;
};

export default getJwt;