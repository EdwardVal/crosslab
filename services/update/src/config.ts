import { exit } from 'process'

function die(reason: string): string {
    console.error(reason)
    exit(1)
}

const DEFAULT_BASE_URL = 'http://localhost:3000'

export const config = {
    PORT: parseInt(process.env.PORT ?? '3000'),
    NODE_ENV: process.env.NODE_ENV ?? 'development',
    BASE_URL: process.env.BASE_URL ?? DEFAULT_BASE_URL,
    SECURITY_ISSUER:
        process.env.SECURITY_ISSUER ??
        die('the environment variable SECURITY_ISSUER is not define!'),
    SECURITY_AUDIENCE:
        process.env.SECURITY_AUDIENCE ??
        die('the environment variable SECURITY_AUDIENCE is not define!'),
}
