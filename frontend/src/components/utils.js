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