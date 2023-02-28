import { useState } from "react"

export function useForm(initState) {
    const [form, setForm] = useState(initState)

    const onChangeForm = (e) => {
      const { name, value } = e.target
      setForm({...form, [name]:value})
    }
    return { form, onChangeForm }
}