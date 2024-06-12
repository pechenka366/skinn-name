import { useClickOutside } from '@/hooks/useClickOutside'
import styles from '@/styles/catalog/index.module.scss'

const ColorsSelect = ({}: {
  handleApplyFiltersWithColors: (sizes: string[]) => void
}) => {
  const { ref } = useClickOutside()

  return <div className={styles.catalog__filters__select} ref={ref} />
}

export default ColorsSelect
