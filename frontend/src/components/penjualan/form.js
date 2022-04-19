import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import FormControl from '@/components/form/formControl'
import Input from '@/components/form/input'
import Button from '@/components/form/button'
import axios from '@/lib/axios'

const Form = ({handleAddPenjualan})=> {
    const penjualanSchema = Yup.object().shape({
        tanggal_transaksi: Yup.string().required('Required',)
    })

    const formik = useFormik({
        initialValues: {
            barang_id:0,
            jumlah_terjual:0,
            tanggal_transaksi:''
        },
        validationSchema: penjualanSchema,
        onSubmit: (values, {resetForm}) => {
            handleSubmit(values, resetForm)
        }
    });

    const handleSubmit = async (values, resetForm) => {
        try {
            const { data } = await axios.post(
                'http://localhost:8000/api/penjualans',
                values,
            )
            
            handleAddPenjualan({
                penjualan: data.data,
            })

            resetForm()
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" 
                onSubmit={formik.handleSubmit}>
                <FormControl 
                    label="Barang ID" 
                    id="barang_id" 
                    name="barang_id"
                >
                    <Input 
                        placeholder="input barang id" 
                        name="barang_id"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.barang_id}
                    />

                    {formik.errors && (
                        <label className='text-red-600'>
                            {formik.errors['barang_id']}
                        </label>
                    )}
                </FormControl>
                <FormControl 
                    label="Jumlah Terjual" 
                    id="jumlah_terjual" 
                    name="jumlah_terjual"
                >
                    <Input 
                        placeholder="input jumlah terjual" 
                        name="jumlah_terjual"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.jumlah_terjual}
                    />

                    {formik.errors && (
                        <label className='text-red-600'>
                            {formik.errors['jumlah_terjual']}
                        </label>
                    )}
                </FormControl>
                <FormControl 
                    label="Tanggal Transaksi" 
                    id="tanggal_transaksi" 
                    name="tanggal_transaksi"
                >
                    <Input 
                        placeholder="input tanggal transaksi" 
                        name="tanggal_transaksi"                  
                        onChange={formik.handleChange}
                        value={formik.values.tanggal_transaksi}
                    />

                    {formik.errors && (
                        <label className='text-red-600'>
                            {formik.errors['tanggal_transaksi']}
                        </label>
                    )}
                </FormControl>

                <Button type="submit">Submit</Button>                
            </form>
           {/* { <pre>
                {JSON.stringify(form, null, 2)}
            </pre>} */}
        </div>
    )
}

Form.propTypes = {}

export default Form
