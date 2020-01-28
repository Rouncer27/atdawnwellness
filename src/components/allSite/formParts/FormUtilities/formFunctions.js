import axios from "axios"

export const submitTheForm = (
  e,
  formID,
  formData,
  updateFormStatus,
  recaptchaRef
) => {
  e.preventDefault()
  const formDataArray = Object.entries(formData)
  const bodyFormData = new FormData()
  formDataArray.forEach(field => {
    bodyFormData.append(field[0], field[1])
  })
  submitToWebServer(formID, bodyFormData, updateFormStatus, recaptchaRef)
}

export const submitToWebServer = async (
  formID,
  data,
  updateFormStatus,
  recaptchaRef
) => {
  const FORM_POST_URL = `https://atdawnmassage.swbdatabases.ca/wp-json/contact-form-7/v1/contact-forms/${formID}/feedback`
  const config = { headers: { "Content-Type": "multipart/form-data" } }
  const serverResponse = await axios.post(FORM_POST_URL, data, config)

  if (serverResponse.data.status === "mail_sent") {
    updateFormStatus({
      submitting: false,
      errorWarnDisplay: false,
      success: true,
      errors: [],
    })
    if (recaptchaRef !== undefined) {
      recaptchaRef.current.reset()
    }
  } else if (serverResponse.data.status === "mail_failed") {
    updateFormStatus({
      submitting: false,
      errorWarnDisplay: true,
      success: false,
      errors: [
        {
          message:
            "The was a error in your zip file. Please try using a different zip file. Thank you.",
          idref: "upload",
        },
      ],
    })
  } else {
    updateFormStatus({
      submitting: false,
      errorWarnDisplay: true,
      success: false,
      errors: serverResponse.data.invalidFields,
    })
  }
}
