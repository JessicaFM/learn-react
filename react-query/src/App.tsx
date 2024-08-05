import React from 'react'; // Add this line to import the 'React' module
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Post from './Post'

const queryClient = new QueryClient()

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Posts />
    </QueryClientProvider>
  )
}

function Posts() {
  const [page, setPage] = React.useState(1)

  const fetchPosts = (page = 1) => fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`).then((res) => res.json())

  const { 
    isLoading, 
    error, 
    isFetching,
    data: posts,
    isPreviousData
  } 
    = useQuery(['posts', page], () => fetchPosts(page), { keepPreviousData : true }
  )

  function handlePageChange() {
    setPage(page + 1)
  }

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error

  if (isFetching) return 'Fetching...'

  return (
    <div className="container">
      <div className="card-container">
        {posts.map((post: any) => (
          <Post key={post.id} data={post} />
        ))}
      </div>
      <span>Current Page: {page}</span>

      <div className="pagination">
        <button onClick={() => {
          if (!isPreviousData) {
            setPage(old => old + 1)
          }
        }}
        disabled={isPreviousData}>
          Load More
        </button>
      </div>
    </div>    
  )
}

export default App
