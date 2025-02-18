import 'bulma/css/bulma.min.css';
import { 
  useQuery, 
  QueryClient,
  QueryClientProvider 
} from '@tanstack/react-query';
import { useState } from 'react';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Products />
    </QueryClientProvider>
  )
}

function Products() {
  const limit = 10;
  const[page, setPage] = useState(0);

  const fetchProducts = async (page) => {
    const skip = page * limit
    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    )
    return res.json()
  }

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['products', page],
    queryFn: () => fetchProducts(page),
    keepPreviousData: true,
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has ocurred: ' + error

  if (isFetching ) return 'Fetching new products'

  const totalPages = data?.total ? Math.ceil(data.total / limit) : 1;

  return (
    <div className="content">
      <section className="section is-medium">
        <h1 className="is-size-2">Products list</h1>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th><abbr title="category">Category</abbr></th>
              <th><abbr title="product">Product</abbr></th>
            </tr>
          </thead>
          <tbody>
            { data?.products?.map((product) =>  (
              <tr key={product.id}>
                <td>
                  { product.category }
                </td>
                <td>
                  <p className="has-text-weight-bold">{ product.title }:</p> 
                  <p>{ product.description }</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        { totalPages && (
          <div className="pagination">
            <p>
              Page {page + 1} from {totalPages}
            </p>
            { page > 0 &&
              <button className="button" onClick={() => setPage(old => Math.max(old - 1, 0))}>
              Previous Page
              </button>
            }
            { page < totalPages &&
              <button className="button" onClick={() => setPage(old => old + 1)}>
                Next Page
              </button>
            }
          </div>
          )}
      </section>
    </div>
  )
}

export default App
