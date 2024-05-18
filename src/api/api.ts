export async function fetchUsersByPage(page: number): Promise<any> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=3`)
  const data = await response.json()
  return data
}

export async function fetchUsersByParams(params: string, page: number): Promise<any> {
  // throw new Error('Invalid page number. Page number must be greater than or equal to 1.')

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=3${params}`
  )
  const data = await response.json()
  return data
}

export async function fetchUsersById(id: number): Promise<any> {
  // throw new Error('Invalid page number. Page number must be greater than or equal to 1.')
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await response.json()
  return data
}
