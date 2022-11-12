import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass, Spinner } from 'phosphor-react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'

import { SearchFormContainer } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransaction(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? <Spinner size={20} /> : <MagnifyingGlass size={20} />}
        {isSubmitting ? 'Buscando' : 'Buscar'}
      </button>
    </SearchFormContainer>
  )
}
