import { oauthFx, singInFx } from '@/api/auth'
import { onAuthSuccess } from '@/lib/utils/auth'
import { ISignUpFx } from '@/types/authPopup'
import { createDomain, createEffect, sample } from 'effector'
import toast from 'react-hot-toast'
import api from '@/api/apiInstance'

const auth = createDomain()

export const openAuthPopup = auth.createEvent()
export const closeAuthPopup = auth.createEvent()
export const handleSignUp = auth.createEvent<ISignUpFx>()
export const handleSignIn = auth.createEvent<ISignUpFx>()
export const setIsAuth = auth.createEvent<boolean>()

export const $openAuthPopup = auth
  .createStore<boolean>(false)
  .on(openAuthPopup, () => true)
  .on(closeAuthPopup, () => false)

export const singUpFx = createEffect(
  async ({ name, password, email, isOAuth }: ISignUpFx) => {
    if (isOAuth) {
      await oauthFx({
        email,
        password,
        name,
      })
      return
    }

    const { data } = await api.post('/api/users/signup', {
      name,
      password,
      email,
    })

    if (data.warningMessage) {
      toast.error(data.warningMessage)
      return
    }

    onAuthSuccess('Регистрация прошла успешно!', data)

    return data
  },
)

export const $isAuth = auth
  .createStore(false)
  .on(setIsAuth, (_, isAuth) => isAuth)

export const $auth = auth
  .createStore({})
  .on(singUpFx.done, (_, { result }) => result)
  .on(singUpFx.fail, (_, { error }) => {
    toast.error(error.message)
  })
  .on(singInFx.done, (_, { result }) => result)
  .on(singInFx.fail, (_, { error }) => {
    toast.error(error.message)
  })

sample({
  clock: handleSignUp,
  source: $auth,
  fn: (_, { name, email, password, isOAuth }) => ({
    name,
    password,
    email,
    isOAuth,
  }),
  target: singUpFx,
})

sample({
  clock: handleSignIn,
  source: $auth,
  fn: (_, { email, password, isOAuth, name }) => ({
    email,
    password,
    isOAuth,
    name,
  }),
  target: singInFx,
})
