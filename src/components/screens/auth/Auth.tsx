import { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import authService from 'services/auth.service'

import { Button } from 'components/ui/button/Button'
import { Field } from 'components/ui/filed/Field'
import { Loader } from 'components/ui/loader/Loadder'

import { AuthType } from 'constants/auth/auth'
import { ScreenRoutes } from 'constants/routes/screen.routes'

import styles from './Auth.module.scss'

export const Auth = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})

	const navigate = useNavigate()

	const [type, setType] = useState(AuthType.SIGN_IN)

	const { mutate, isLoading } = useMutation(
		['auth'],
		({ email, password }: { email: string; password: string }) =>
			authService.authUser(email, password, type),
		{
			onSuccess: () => {
				navigate(ScreenRoutes.HOME)
			}
		}
	)

	const onSubmit = (data: FieldValues) => {
		mutate(data as { email: string; password: string })
	}

	return (
		<div className={'wrapper-inner-page'}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Field
					type='text'
					placeholder='Enter email'
					register={register}
					registerId='email'
					registerOptions={{ required: 'Email is required' }}
					error={errors.email?.message as string}
				/>

				<Field
					type='text'
					placeholder='Enter password'
					register={register}
					registerId='password'
					registerOptions={{ required: 'Password is required' }}
					error={errors.password?.message as string}
				/>

				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapperButtons}>
						<Button onClick={() => setType(AuthType.SIGN_UP)}>
							{'Sing Up'}
						</Button>
						<Button onClick={() => setType(AuthType.SIGN_IN)}>
							{'Sing In'}
						</Button>
					</div>
				)}
			</form>
		</div>
	)
}
