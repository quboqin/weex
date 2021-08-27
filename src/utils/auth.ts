interface User {
  id: number
  firstName?: string
  lastName?: string
}

async function getUser(): Promise<User | null> {
  try {
    const user = import.meta.env.VITE_USER_VALID === '1' ? { id: 10001 } : null
    return user
  } catch (error) {
    return null
  }
}

export { getUser }
