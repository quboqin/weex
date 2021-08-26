/* eslint-disable @typescript-eslint/no-explicit-any */

async function getUser(): Promise<any> {
  try {
    const user = {}
    if (user) {
      return user
    }
    return null
  } catch (error) {
    return null
  }
}

export { getUser }
