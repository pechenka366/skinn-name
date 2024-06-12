import { ICatalogFiltersProps } from '@/types/catalog'
import styles from '@/styles/catalog/index.module.scss'
import CategorySelect from './CategorySelect'
import PriceSelect from './PriceSelect'

const CatalogFilters = ({
  handleApplyFiltersWithPrice,
}: ICatalogFiltersProps) => (
  <>
    {/* <FiltersPopup
        handleApplyFiltersWithPrice={handleApplyFiltersWithPrice}
        handleApplyFiltersWithSizes={handleApplyFiltersWithSizes}
        handleApplyFiltersWithColors={handleApplyFiltersWithColors}
      /> */}
    <div className={styles.catalog__filters}>
      <div className={styles.catalog__filters__top}>
        <div className={styles.catalog__filters__top__left}>
          <CategorySelect />
          <PriceSelect
            handleApplyFiltersWithPrice={handleApplyFiltersWithPrice}
          />
          {/* <SizesSelect handleApplyFiltersWithSizes={handleApplyFiltersWithSizes}/> */}
        </div>
      </div>
    </div>
  </>
)

export default CatalogFilters
