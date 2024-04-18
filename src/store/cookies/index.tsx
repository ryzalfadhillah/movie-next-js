'use server'

import { cookies } from 'next/headers'

// Create cookies
export async function create(key: string, value: string) {
    const setCookies = cookies().set(key, value)
    return setCookies
}

// Read cookies
export async function read(key: string) {
    const getCookies = cookies().get(key)?.value
    return getCookies
}

// export async function delete() {
//     cookies().delete('name')
//     // ...
//   }