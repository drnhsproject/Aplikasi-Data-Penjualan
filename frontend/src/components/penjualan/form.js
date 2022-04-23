import React, { useState } from 'react'
import PropTypes from 'prop-types'

import FormControl from '@/components/form/formControl'
import Input from '@/components/form/input'
import Button from '@/components/form/button'


const Form = ({ formik })=> {
    return(
        <div className="w-full max-w-xs">
            <form className="px-8 pt-6 pb-8 mb-4 mr-2 bg-white rounded shadow-md" 
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
                        placeholder="yyyy-mm-dd" 
                        name="tanggal_transaksi" 
                        type="date"                 
                        onChange={formik.handleChange}
                        value={formik.values.tanggal_transaksi}
                    />

                    {formik.errors && (
                        <label className='text-red-600'>
                            {formik.errors['tanggal_transaksi']}
                        </label>
                    )}
                </FormControl>

                <Button 
                    type="submit"
                    disabled={!(formik.isValid && formik.dirty)}>
                    {formik.values.id ? 'Update' : 'Submit'}
                </Button>                
            </form>
           {/* { <pre>
                {JSON.stringify(form, null, 2)}
            </pre>} */}
        </div>
    )
}

Form.propTypes = {}

export default Form
