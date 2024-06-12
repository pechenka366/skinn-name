import { IFavoriteItem } from '@/types/favorites'
import styles from '@/styles/favorites/index.module.scss'
import Image from 'next/image'
import { useState } from 'react'
import { $cart, $cartFromLs, addProductToCart } from '@/context/cart'
import { useGoodsByAuth } from '@/hooks/useGoodsByAuth'
import DeleteCartItemBtn from '@/components/elements/DeleteCartItemBtn/DeleteCartItemBtn'
import AddToCartIcon from '@/components/elements/AddToCartIcon/AddToCartIcon'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useLang } from '@/hooks/useLang'
import {
  deleteProductFromLS,
  formatPrice,
  isUserAuth,
} from '@/lib/utils/common'
import { addCartItemToLS } from '@/lib/utils/cart'
import { IProduct } from '@/types/common'
import { useProductDelete } from '@/hooks/useProductDelete'
import {
  deleteProductFromFavorites,
  setFavoritesFromLS,
} from '@/context/favorites'

const FavoritesListItem = ({ item }: { item: IFavoriteItem }) => {
  const currentCartByAuth = useGoodsByAuth($cart, $cartFromLs)
  const [addToCartSpinner, setAddToCartSpinner] = useState(false)
  const isProductInCart = currentCartByAuth.find(
    (cartItem) =>
      cartItem.productId === item.productId && cartItem.size === item.size,
  )

  const isMedia485 = useMediaQuery(485)
  const imgSize = isMedia485 ? 132 : 160
  const { lang, translations } = useLang()
  const { handleDelete, deleteSpinner } = useProductDelete(
    item._id || item.clientId,
    deleteProductFromFavorites,
  )

  const addToCart = () => {
    const cartItem = {
      ...item,
      _id: item.productId,
      images: [item.image],
      characteristics: { color: item.color },
    }

    if (!isUserAuth()) {
      addCartItemToLS(cartItem as unknown as IProduct, item.size, 1)
      return
    }

    const auth = JSON.parse(localStorage.getItem('auth') as string)

    const clientId = addCartItemToLS(
      cartItem as unknown as IProduct,
      item.size,
      1,
      false,
    )

    addProductToCart({
      jwt: auth.accessToken,
      setSpinner: setAddToCartSpinner,
      productId: item.productId,
      category: item.category,
      count: 1,
      size: item.size,
      clientId,
    })
  }

  const handleDeleteFavorite = () => {
    if (!isUserAuth()) {
      deleteProductFromLS(
        item.clientId,
        'favorites',
        setFavoritesFromLS,
        // setShouldShowEmptyFavorites,
        'Удалено из избранного!',
      )
      return
    }

    handleDelete()
    deleteProductFromLS(
      item.clientId,
      'favorites',
      setFavoritesFromLS,
      // setShouldShowEmptyFavorites,
      '',
      false,
    )
  }

  return (
    <>
      <DeleteCartItemBtn
        btnDisabled={deleteSpinner}
        callback={handleDeleteFavorite}
        className={styles.favorites__list__item__delete}
      />
      <AddToCartIcon
        isProductInCart={!!isProductInCart}
        addToCartSpinner={addToCartSpinner}
        callback={addToCart}
        className={styles.favorites__list__item__cart}
        addedClassName={styles.favorites__list__item__cart_added}
      />
      <div className={styles.favorites__list__item__img}>
        <Image
          src={item.image}
          alt={item.name}
          width={imgSize}
          height={imgSize}
        />
      </div>
      <p className={styles.favorites__list__item__info}>
        <span className={styles.favorites__list__item__info__name}>
          {item.name}
        </span>
        <span className={styles.favorites__list__item__info__size}>
          {item.size.length
            ? `${translations[lang].catalog.size}: ${item.size.toUpperCase()}`
            : ''}
        </span>
        <span className={styles.favorites__list__item__info__price}>
          {formatPrice(+item.price)} ₽
        </span>
      </p>
    </>
  )
}

export default FavoritesListItem
