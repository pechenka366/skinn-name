import { notFound } from 'next/navigation'
import { productCategories } from '@/constants/product'
import ProductsPage from '@/components/templates/ProductsPage/ProductsPage'

export default function Category({
  params,
}: {
  params: { productId: string; category: string }
}) {
  if (!productCategories.includes(params.category)) {
    notFound()
  }

  return <ProductsPage searchParams={params || {}} pageName={params.category} />
  // productId={params.productId} category={params.category} />
}
