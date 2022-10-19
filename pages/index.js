import data from '../utils/data'
import Layout from '../components/Layout'
import ProducItem from '../components/ProducItem'

export default function Home() {
  return (
    <Layout title="Home">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:grid-cols-2 2xl:grid-cols-6">
        {data.products.map((product) => (
          <ProducItem product={product} key={product.slug}></ProducItem>
        ))}
      </div>
    </Layout>
  )
}
