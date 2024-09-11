import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CustomForm = () => {

    return (
        <Formik
        initialValues = {{
            date: '',
            sum: 0,
            category: '',
            text: '',
        }}
        validationSchema = {Yup.object({
			date: Yup.date()
    				.required('Дата обязательна')
    				.nullable(),
            sum: Yup.number()
                    .required('Сумма обязательна')
                    .min(5, 'Не менее 5'),
            category: Yup.string().required('Выберите валюту'),
            text: Yup.string()
                    .min(10, 'Не менее 10 символов'),
        })}
        onSubmit = {values => {
			localStorage.setItem('date', values.date);
            localStorage.setItem('sum', values.sum);
            localStorage.setItem('category', values.category);
            localStorage.setItem('comments', values.text);

            console.log('Данные сохранены в localStorage:', values);
		}}
        >
            <Form className="form">
                <h2>Тест Form</h2>
				<label htmlFor="date">Дата:</label>
				<Field 
					type="date" 
					name="date" 
					id="data" 
				/>
				<ErrorMessage component="div" className="error" name="date"/>
                <label htmlFor="sum">Сумма:</label>
                <Field
                    id="sum"
                    name="sum"
                    type="number"
                    autoComplete="off"
                />
                <ErrorMessage component="div" className="error" name="sum"/>
                <label htmlFor="category">Категория:</label>
                <Field
                    id="category"
                    name="category"
                    as="select"
                    >
                        <option value="">Выберите валюту</option>
                        <option value="USD">USD</option>
                        <option value="UAH">UAH</option>
                        <option value="RUB">RUB</option>
                </Field>
                <ErrorMessage component="div" className="error" name="category"/>
                <label htmlFor="text">Комментарий:</label>
                <Field 
                    id="text"
                    name="text"
                    as="textarea"
                />
                <ErrorMessage component="div" className="error" name="text"/>
                <button type="submit">Отправить</button>
            </Form>
        </Formik>
    )
}

export default CustomForm;