export function quatesHtml(quates) {
    return {__html: quates}
}

export function spacePath(namespace) {
    var pathname = namespace
    if (pathname.includes('%20')) {
        pathname = pathname.replace(/%20/g, ' ')
    }
    return pathname
}

export function elementPath() {
    const pathname_split = window.location.pathname.split('/')
    return {
        'breadcrumb': pathname_split[1],
        'type': pathname_split[2],
        'category': pathname_split[3],
        'id': pathname_split[4],
    }
}

export function refreshTokenSetup(res) {
    let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

    const refreshToken = async () => {
        const newAuthRes = await res.reloadAuthResponse();
        refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
        console.log('newAuthRes:', newAuthRes);
        console.log('new auth Token', newAuthRes.id_token);

        setTimeout(refreshToken, refreshTiming);
    };

    setTimeout(refreshToken, refreshTiming);
}

export function apiUrl() {
    let url = ''
    if (process.env.NODE_ENV === 'production') {
        url = window.location.origin + '/api';
    } else {
        url = 'http://localhost:8000/api';
    };
    return url;
}