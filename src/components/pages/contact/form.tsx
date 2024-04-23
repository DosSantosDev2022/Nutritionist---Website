import { Button } from '../../button'
import { Input } from '../../input'
import { Label } from '../../label'
import TextArea from '../../textArea'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'

const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

export const FormSchema = z.object({
  nome: z.string().nonempty('O nome é obrigatório'),
  email: z
    .string()
    .min(1, 'O email deve ser váilido')
    .refine((value) => regexEmail.test(value), {
      message: 'Email inválido, tente novamente',
    }),
  tel: z
    .string()
    .min(8, { message: 'O telefone deve ter no mínimo 8 números' })
    .max(15, { message: ' O telefone dever ter no máximo 15 números' }),
  mensagem: z
    .string()
    .min(10, { message: 'Por favor deixe uma mensagem completa' }),
})

type Form = z.infer<typeof FormSchema>

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Form>({
    resolver: zodResolver(FormSchema),
  })

  const onSubmit = () => {
    toast.success('Formúlario enviado com sucesso!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[30px] "
    >
      <div className="flex flex-col lg:flex-row items-center gap-[30px]">
        <div className="flex flex-col w-full">
          <Label>Nome</Label>
          <Input.Root>
            <Input.Input
              type="text"
              placeholder="Digite seu nome completo"
              {...register('nome')}
            />
          </Input.Root>
          <span className="text-md font-normal text-red-500">
            {errors.nome?.message}
          </span>
        </div>
        <div className="flex flex-col w-full">
          <Label>E-mail</Label>
          <Input.Root>
            <Input.Input
              type="email"
              placeholder="Digite seu melhor email"
              {...register('email')}
            />
          </Input.Root>
          <span className="text-md font-normal text-red-500">
            {errors.email?.message}
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <Label>Telefone</Label>
        <Input.Root>
          <Input.Input
            type="tel"
            placeholder="(xx)xxxxx-xxxx"
            {...register('tel')}
          />
        </Input.Root>
        <span className="text-md font-normal text-red-500">
          {errors.tel?.message}
        </span>
      </div>
      <div className="flex flex-col">
        <Label>Mensagem</Label>
        <TextArea placeholder="Deixe sua mensagem" {...register('mensagem')} />
        <span className="text-md font-normal text-red-500">
          {errors.mensagem?.message}
        </span>
      </div>
      <Button variant="action3">Enviar Mensagem</Button>
    </form>
  )
}
