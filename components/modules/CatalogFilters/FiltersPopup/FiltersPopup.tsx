import { ICatalogFiltersProps } from '@/types/catalog'
import styles from '@/styles/catalog/index.module.scss'

const FiltersPopup = ({}: Omit<
  ICatalogFiltersProps,
  'handleApplyFiltersBySort'
>) => (
  // const filtersPopup = useUnit($filtersPopup)
  // const products = useUnit($products)
  // const { itemVariants, sideVariants, popupZIndex } = useMenuAnimation(
  //   102,
  //   filtersPopup
  // )

  <div className={styles.catalog__filters__popup}>
    {/* <AnimatePresence>
        {filtersPopup && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: '100%',
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
            className={styles.catalog__filters__popup__aside}
          >
            <motion.div
              className={styles.catalog__filters__popup__inner}
              initial='closed'
              animate='open'
              exit='closed'
              // variants={sideVariants}
            >
              <motion.button
                className={`btn-reset ${styles.catalog__filters__popup__close}`}
                // variants={itemVariants}
                // onClick={handleClosePopup}
              />
              <motion.h2
                // variants={itemVariants}
                className={styles.catalog__filters__popup__title}
              >
                {translations[lang].catalog.filters}
              </motion.h2>
              <motion.div
                className={styles.catalog__filters__popup__price}
                variants={itemVariants}
              >
                <PriceFilter
                  handleApplyFiltersWithPrice={handleApplyFiltersWithPrice}
                />
              </motion.div>
              <motion.div
                className={styles.catalog__filters__popup__category}
                variants={itemVariants}
              >
                <h3 className={styles.catalog__filters__popup__inner_title}>
                  {translations[lang].catalog.categories}
                </h3>
                <CategoryFilterList
                  mobileClassName={styles.filters_mobile}
                  handleSelectAllCategories={handleSelectAllCategories}
                  currentOptions={currentOptions}
                  option={option}
                  setOption={setOption}
                  allCategoriesTitle={allCategoriesTitle}
                  catalogCategoryOptions={catalogCategoryOptions}
                />
              </motion.div>
              <motion.div
                className={styles.catalog__filters__popup__sizes}
                variants={itemVariants}
              >
                <SizesFilter
                  handleApplyFiltersWithSizes={handleApplyFiltersWithSizes}
                />
              </motion.div>
              <motion.div
                className={styles.catalog__filters__popup__colors}
                variants={itemVariants}
              >
                <ColorsFilter
                  handleApplyFiltersWithColors={handleApplyFiltersWithColors}
                />
              </motion.div>
              <motion.button
                variants={itemVariants}
                className={`btn-reset ${styles.catalog__filters__popup__apply}`}
                onClick={handleClosePopup}
              >
                {productsSpinner ? (
                  <FontAwesomeIcon icon={faSpinner} spin />
                ) : !!products.count ? (
                  `${translations[lang].catalog.found} ${
                    products.count
                  } ${showCountMessage(`${products.count}`, lang)}`
                ) : (
                  translations[lang].catalog.nothing_found
                )}
              </motion.button>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence> */}
  </div>
)

export default FiltersPopup
