export const refreshToken = (response) => {
    let refreshTime = (response.tokenObj.expires_in || 3600 - 5 *60) * 1000;

    const refresh = async () => {
        const newAuth = await response.reloadAuthResponse();
        refreshTime = (newAuth.expires_in || 3600 - 5 * 60 ) * 1000;
        setTimeout(refresh, refreshTime);
    }

    setTimeout(refresh, refreshTime);
}