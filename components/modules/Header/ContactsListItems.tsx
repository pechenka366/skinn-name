import Link from 'next/link'
import { useLang } from '@/hooks/useLang'

const ContactsListItems = () => {
  const { lang, translations } = useLang()

  return (
    <>
      <li className="nav-menu__accordion__item">
        <a
          href="tel:+79143516552"
          className="nav-menu__accordion__item__link  nav-menu__accordion__item__title"
        >
          +7 (914) 351 65 52
        </a>
      </li>
      <li className="nav-menu__accordion__item">
        <a
          href="skin-store@mail.ru"
          className="nav-menu__accordion__item__link"
        >
          Email
        </a>
      </li>
      <li className="nav-menu__accordion__item">
        <Link
          href="https://t.me/Alex366"
          className="nav-menu__accordion__item__link"
        >
          {translations[lang].main_menu.tg}
        </Link>
      </li>
      <li className="nav-menu__accordion__item">
        <Link
          href="https://vk.com/pechenka_2_3"
          className="nav-menu__accordion__item__link"
        >
          {translations[lang].main_menu.vk}
        </Link>
      </li>
      <li className="nav-menu__accordion__item">
        <Link
          href="/purchase-returns"
          className="nav-menu__accordion__item__link"
        >
          {translations[lang].main_menu.returns}
        </Link>
      </li>
    </>
  )
}

export default ContactsListItems
