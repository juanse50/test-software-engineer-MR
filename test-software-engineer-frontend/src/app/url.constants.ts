const getURlBackend = () => {
    let client = "http://localhost:8080/api";

    return `${client}`
}

export const REST = getURlBackend();
export const API_REST = REST+"";

export const TOKEN = {
TOKEN_KEY: 'AuthToken',
USUARIO_KEY: 'AuthUser'
}
export const NAME_APP = "TEST-SOFTWARE-ENGINEER"