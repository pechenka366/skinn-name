import { $watchedProducts, loadWatchedProducts } from '@/context/goods'
import { getWatchedProductFromLS } from '@/lib/utils/common'
import { useUnit } from 'effector-react'
import { useEffect } from 'react'

export const useWatchedProducts = (excludedProductId?: string) => {
  const watchedProducts = useUnit($watchedProducts)

  useEffect(() => {
    const watchedProducts = getWatchedProductFromLS()

    loadWatchedProducts({
      payload: excludedProductId
        ? watchedProducts.filter((item) => item._id !== excludedProductId)
        : watchedProducts,
    })
  }, [excludedProductId])

  return { watchedProducts }
}
