import { useState } from "react"
function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [posted, setPosted] = useState(false);
  const handleSubmit = async (event:any) => {
    event.preventDefault()
    const form = event.currentTarget.elements
    const body:object = {
      name:form.name.value,
      from:form.email.value,
    }
    setSubmitted(true)
    try {
      const res = await fetch('/api/handleForm',{
        method:'POST',
        body: JSON.stringify(body),
      })
      if (res.ok) setPosted(true) 
    } catch (error) {
      console.log("ERROR:", error)
    }
  }
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
        <input id="name" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="text" name="name" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
        <input id="email" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="email" name="email" />
      </div>
      <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
    </form>
  )
}
export default ContactForm