export async function fetchUsersByPage(page: number): Promise<any> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=3`)
  const data = await response.json()
  return data
}

export async function fetchUsersByParams(
  params: { ids: string; usernames: string },
  page: number
): Promise<any> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=3&${params.ids}`
  )
  const data = await response.json()
  return data
}

export async function fetchUsersById(id: number): Promise<any> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await response.json()
  return data
}
