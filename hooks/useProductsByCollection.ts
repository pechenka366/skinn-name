/* eslint-disable prettier/prettier */
import { $products, loadProductsByFilterFx } from '@/context/goods'
import { useLang } from './useLang'
import { useUnit } from 'effector-react'
import { capitalizeFirstLetter } from '@/lib/utils/common'

export const useProductsByCollection = (collection: string) => {
  const products = useUnit($products)
  const spinner = useUnit(loadProductsByFilterFx.pending)
  const { lang, translations } = useLang()
  const langText = translations[lang].product.collection_goods
  const capitalizedCollection = capitalizeFirstLetter(collection)
  const title =
    lang === 'ru'
      ? `${langText} «${capitalizedCollection}»`
      : [
        langText.slice(0, 17),
        ` «${capitalizedCollection}»`,
        langText.slice(17),
      ].join('')

  return { title, capitalizedCollection, products, spinner }
}
