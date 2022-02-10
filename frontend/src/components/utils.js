export function quatesHtml(quates) {
    return {__html: quates}
}

export function productId(namespace) {
    const url_split = window.location.pathname.split(namespace)
    const product_id = url_split[1]

    return product_id
}