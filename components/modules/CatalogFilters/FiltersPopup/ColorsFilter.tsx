import { useLang } from '@/hooks/useLang'
import styles from '@/styles/catalog/index.module.scss'

const ColorsFilter = ({}: {
  handleApplyFiltersWithColors: (sizes: string[]) => void
}) => {
  const { lang, translations } = useLang()

  return (
    <>
      <h3 className={styles.catalog__filters__popup__inner_title}>
        {translations[lang].catalog.color}
      </h3>
      <ul
        className={`list-reset ${styles.catalog__filters__list} ${styles.filters_mobile}`}
      />
    </>
  )
}

export default ColorsFilter
