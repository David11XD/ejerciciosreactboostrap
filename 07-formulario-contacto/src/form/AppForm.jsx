import { Formik, Field, Form, ErrorMessage } from "formik";

function AppForm() {
    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                message: "Hola te contacto por..."
            }}
            validate={values => {
                let errors = {};

                if (!values.name) {
                    errors.name = "Este campo es requerido";
                }

                if (!values.email) {
                    errors.email = "Este campo es requerido";
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = "El correo no es válido";
                }

                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                let url = "";

                let formData = new FormData();
                formData.append("name", values.name);
                formData.append("email", values.email);
                formData.append("message", values.message);

                fetch(url, {
                    method: "POST",
                    body: formData,
                    headers: {
                        Accept: "application/json"
                    }
                }).then(() => {
                    setSubmitting(false);
                    alert("Gracias por contactarme");
                });
            }}
        >
            {({ isSubmitting, values }) => (
                <Form className="form">
                    <div>
                        <label htmlFor="name">Nombre:</label>
                        <Field type="text" name="name" autoComplete="off" />
                        <ErrorMessage name="name" component="p" />
                    </div>

                    <div>
                        <label htmlFor="email">Correo electrónico:</label>
                        <Field type="email" name="email" autoComplete="off" />
                        <ErrorMessage name="email" component="p" />
                    </div>

                    <div>
                        <label htmlFor="message">Mensaje:</label>
                        <Field as="textarea" name="message" />
                    </div>

                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default AppForm;