import * as Yup from "yup"

export const signInSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("password is required").min(6, "minimum is 6 characters").max(20, "maximum is 20 characters")
})